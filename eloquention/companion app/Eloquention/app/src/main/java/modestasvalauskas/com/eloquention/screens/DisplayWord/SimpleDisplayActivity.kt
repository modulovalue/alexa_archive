package modestasvalauskas.com.eloquention.screens.DisplayWord

import android.os.Bundle
import modestasvalauskas.com.eloquention.R
import modestasvalauskas.com.eloquention.persistence.ESD
import modestasvalauskas.com.eloquention.persistence.EloData
import modestasvalauskas.com.eloquention.util.HomeAppCompatActivity


class SimpleDisplayActivity : HomeAppCompatActivity(R.layout.activity_simple_display, true), ESDInterface {

    companion object {
        var DATA = "data"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        supportActionBar?.title = getESD().name
        supportFragmentManager.beginTransaction().replace(R.id.wordcontainer, DisplayWordFragment()).commit()
        supportActionBar?.subtitle = "${EloData.data.indexOf(EloData.data.find { getESD().id == it.id }) + 1 }/${EloData.data.size} "
    }

    override fun onBackPressed() {
        super.onBackPressed()
        overridePendingTransition(0, android.R.anim.slide_out_right)
    }

    override fun getESD(): ESD {
        return intent.extras.get(DATA) as ESD
    }

}

interface ESDInterface {
    fun getESD(): ESD
}