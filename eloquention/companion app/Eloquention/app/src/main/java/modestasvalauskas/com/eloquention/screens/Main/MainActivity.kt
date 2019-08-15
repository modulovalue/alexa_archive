package modestasvalauskas.com.eloquention.screens.Main

import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.support.v4.content.ContextCompat
import android.view.View
import android.widget.Toast
import com.anjlab.android.iab.v3.BillingProcessor
import com.anjlab.android.iab.v3.TransactionDetails
import com.chibatching.kotpref.Kotpref
import com.stephentuso.welcome.WelcomeHelper
import es.dmoral.toasty.Toasty
import io.paperdb.Paper
import kotlinx.android.synthetic.main.activity_main.*
import modestasvalauskas.com.eloquention.R
import modestasvalauskas.com.eloquention.Tutorial.WelcomeClass
import modestasvalauskas.com.eloquention.screens.Main.Fragments.List.ListFragment
import modestasvalauskas.com.eloquention.screens.Main.Fragments.New.NewFragment
import modestasvalauskas.com.eloquention.screens.Main.Fragments.Settings.SettingsFragment
import modestasvalauskas.com.eloquention.util.HomeAppCompatActivity
import modestasvalauskas.com.eloquention.util.IAP
import net.danlew.android.joda.JodaTimeAndroid


class MainActivity : HomeAppCompatActivity(R.layout.activity_main, false), TitleInterface, BillingProcessor.IBillingHandler {

    /*          TitleInterface */
    override fun setTitle(title: String) {
        supportActionBar?.title = title
    }

    /*          BillingProcessor.IBillingHandler  */
    /*
    * Called when BillingProcessor was initialized and it's ready to purchase
    */
    override fun onBillingInitialized() {
        Toast.makeText(this, "billing initialized", Toast.LENGTH_SHORT).show()
    }

    /*
    * Called when requested PRODUCT ID was successfully purchased
    */
    override fun onProductPurchased(productId: String, details: TransactionDetails?) {
        Toast.makeText(this, "product purchased $productId $details", Toast.LENGTH_SHORT).show()
    }

    /*
    * Called when some error occurred. See Constants class for more details
    *
    * Note - this includes handling the case where the user canceled the buy dialog:
    * errorCode = Constants.BILLING_RESPONSE_RESULT_USER_CANCELED
    */
    override fun onBillingError(errorCode: Int, error: Throwable?) {
        Toast.makeText(this, "billing error $errorCode ${error?.localizedMessage}", Toast.LENGTH_SHORT).show()
    }

    /*
    * Called when purchase history was restored and the list of all owned PRODUCT ID's
    * was loaded from Google Play
    */
    override fun onPurchaseHistoryRestored() {
        Toast.makeText(this, "purchase history restored", Toast.LENGTH_SHORT).show()
    }

    override fun setSubtitle(subtitle: String) {
        supportActionBar?.subtitle = subtitle
    }

    private val welcomeScreen: WelcomeHelper by lazy { WelcomeHelper(this, WelcomeClass::class.java) }

    private var clickPerformed = false

    private val views = arrayOf(ListFragment(), NewFragment(), SettingsFragment())

    var bp: BillingProcessor? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        init()
        super.onCreate(savedInstanceState)
        welcomeScreen.show(savedInstanceState)
        initNavigationAndSelectInitialTab()
    }

    fun init() {
        JodaTimeAndroid.init(this)
        Kotpref.init(context = this)
        Toasty.Config.getInstance().setInfoColor(ContextCompat.getColor(this, R.color.colorPrimary)).apply()
        Paper.init(this)
        bp = BillingProcessor.newBillingProcessor(
                this,
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAovl5ZE50FN5MJfuNOkbgszAf6GrhJDwnkrNJNkT8j94UHAcLB+Tg9fZmcq+AZu1girxhCIX4GxjnQcvB3NiGgSlZTqhUjngeHow5MWkMgTG/ZrmZyWxM1ALpVCGMlI2LhIu8iEVejCxJKuGrFComvWz5uRxwUjEmFAGz2je940AOudBtCp5rbEWdvHG0Lw4OGEVkB3hBXZ/pkxBk1+xTROn6eRWbHd/ehVuUtGosiV8hP9AoSyvEoPbbjo8sham/bxKgw92YOHttCjDmmL923pdQDbKKgGx3AsyLJCo/MRH8P31dlF37jRhhokivmkQw9yUjQx7qTThTeaKeYfUVSwIDAQAB",
                this)
        bp!!.initialize()
    }

    fun initNavigationAndSelectInitialTab() {
        bottomNavigationView.setOnNavigationItemSelectedListener({
            when (it.itemId) {
                R.id.bottombarlist -> supportFragmentManager.beginTransaction().replace(R.id.container, views[0]).commit()
                R.id.bottombarnew -> supportFragmentManager.beginTransaction().replace(R.id.container, views[1]).commit()
                R.id.bottombarsettings -> supportFragmentManager.beginTransaction().replace(R.id.container, views[2]).commit()
            }
            true
        })
        // check whether activity was created before
        if (!clickPerformed) {
            bottomNavigationView.findViewById<View>(R.id.bottombarnew).performClick()
            clickPerformed = true
        }
    }

    override fun onSaveInstanceState(outState: Bundle?, outPersistentState: PersistableBundle?) {
        super.onSaveInstanceState(outState, outPersistentState)
        welcomeScreen.onSaveInstanceState(outState)
    }

    // some billing stuff
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
        if (!bp!!.handleActivityResult(requestCode, resultCode, data)) {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }

    public override fun onDestroy() {
        // release billing resources
        if (bp != null) {
            bp!!.release()
        }
        super.onDestroy()
    }

    /*+
     initiate purchase dialog
     */
    fun purchaseAllWords() {
        if (bp!!.isOneTimePurchaseSupported) {
            bp!!.purchase(this, IAP.ALLWORDSID)
        } else {
            Toast.makeText(this, "In App Käufe werden auf diesem Gerät nicht unterstützt.", Toast.LENGTH_LONG).show()
        }
    }
}

interface TitleInterface {
    fun setTitle(title: String)
    fun setSubtitle(subtitle: String)
}