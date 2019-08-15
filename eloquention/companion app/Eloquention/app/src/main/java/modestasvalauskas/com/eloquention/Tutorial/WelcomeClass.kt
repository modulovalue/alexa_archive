package modestasvalauskas.com.eloquention.Tutorial

import com.stephentuso.welcome.BasicPage
import com.stephentuso.welcome.TitlePage
import com.stephentuso.welcome.WelcomeActivity
import com.stephentuso.welcome.WelcomeConfiguration
import modestasvalauskas.com.eloquention.R


class WelcomeClass: WelcomeActivity() {

    override fun configuration(): WelcomeConfiguration {
        return WelcomeConfiguration.Builder(this)
                .defaultBackgroundColor(R.color.colorPrimary)
                .page(TitlePage(
                        R.drawable.iclauncherhq,
                        resources.getString(R.string.tutorialtitle))
                )
                .page(BasicPage(
                        R.drawable.iclauncherhq,
                        resources.getString(R.string.tutfirstpagetitle),
                        resources.getString(R.string.tutfirstpagecontent))
                )
                .page(BasicPage(
                        R.drawable.iclauncherhq,
                        resources.getString(R.string.tutsecondpagetitle),
                        resources.getString(R.string.tutsecondpagecontent))
                )
                .page(BasicPage(
                        R.drawable.iclauncherhq,
                        resources.getString(R.string.tutthirdpagetitle),
                        resources.getString(R.string.tutthirdpagecontent))
                )
                .swipeToDismiss(true)
                .build()
    }

}