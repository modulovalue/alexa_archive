package modestasvalauskas.com.eloquention.util

import android.os.Build
import android.os.Bundle
import android.support.v4.app.Fragment
import android.transition.Fade

abstract class FadingFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (Build.VERSION.SDK_INT >= 19) {
            enterTransition = Fade(1)
            exitTransition = Fade(2)
        }
    }

}