package modestasvalauskas.com.eloquention.screens.Main.Fragments.New

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.fragment_new.*
import modestasvalauskas.com.eloquention.R
import modestasvalauskas.com.eloquention.persistence.DataManager
import modestasvalauskas.com.eloquention.persistence.EloData
import modestasvalauskas.com.eloquention.screens.DisplayWord.SimpleDisplayActivity
import modestasvalauskas.com.eloquention.screens.Main.MainActivity
import modestasvalauskas.com.eloquention.screens.Main.TitleInterface
import modestasvalauskas.com.eloquention.util.FadingFragment
import org.joda.time.DateTime
import org.joda.time.Duration


class NewFragment : FadingFragment() {

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater!!.inflate(R.layout.fragment_new, container, false)
    }

    override fun onStart() {
        super.onStart()
        (activity as TitleInterface).setTitle("Eloquention")
        (activity as TitleInterface).setSubtitle("")
        updateTextView()
        populateData()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val h = Handler()
        h.postDelayed(object : Runnable {
            override fun run() {
                updateTextView()
                h.postDelayed(this, 1000)
            }
        }, 1000)
    }

    private fun updateTextView() {
        if (newfragmenttimeleft != null) {
            val t = Duration(DateTime.now(), DateTime.now().plusDays(1).withTimeAtStartOfDay())
            if (DataManager.leftToday() <= 0 && !DataManager.iAPUnlocked()) {
                newfragmenttimeleft.text = "" +
                        "${String.format("%02d", t.standardHours)}:" +
                        "${String.format("%02d", t.standardMinutes - (t.standardHours * 60))}:" +
                        "${String.format("%02d", t.standardSeconds - (t.standardMinutes * 60))}"
            } else {
                newfragmenttimeleft.text = ""
            }
        }
    }

    fun populateData() {
        if (DataManager.leftToday() > 0) {
            setButtonToNewWord()
        } else {
            setButtonToBuyAllWords()
        }
        newfragmenttext.text = "${DataManager.unlocked().size}/${EloData.data.size} freigeschaltet"
        newfragmentcredits.text = "Heute: ${DataManager.leftToday()}/${DataManager.dailylimit()} "
    }

    fun setButtonToNewWord() {
        newfragmentactionbutton.text = "Neues Wort anzeigen"
        newfragmentactionbutton.setOnClickListener {
            val list = DataManager.unlockable()
            val newEsd = list.get((Math.random() * list.size).toInt())
            DataManager.unlock(newEsd)
            startActivity(
                    Intent(context, SimpleDisplayActivity::class.java)
                            .setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                            .putExtra(SimpleDisplayActivity.DATA, newEsd)
            )
            activity.overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
            populateData()
        }
    }

    fun setButtonToBuyAllWords() {
        newfragmentactionbutton.text = "Alle Wörter erwerben"
        newfragmentactionbutton.setOnClickListener {
            (activity as MainActivity).purchaseAllWords()
        }
    }

}
