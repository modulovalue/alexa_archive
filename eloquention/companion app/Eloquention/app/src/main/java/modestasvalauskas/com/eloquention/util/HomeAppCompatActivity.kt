package modestasvalauskas.com.eloquention.util

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.MenuItem

/**
 * Created by valauskasmodestas on 22.11.17.
 */

open class HomeAppCompatActivity(var contentViewId: Int, var homeEnabled: Boolean) : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(contentViewId)
        supportActionBar?.setDisplayHomeAsUpEnabled(homeEnabled)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            android.R.id.home -> onBackPressed()
        }
        return true
    }
}