package modestasvalauskas.com.eloquention.screens.Main.Fragments.Settings

import android.content.Context
import android.content.Intent
import android.content.Intent.*
import android.net.Uri
import android.os.Bundle
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.afollestad.materialdialogs.MaterialDialog
import es.dmoral.toasty.Toasty
import kotlinx.android.synthetic.main.fragment_settings.*
import kotlinx.android.synthetic.main.itemsettingscell.view.*
import modestasvalauskas.com.eloquention.R
import modestasvalauskas.com.eloquention.persistence.DataManager
import modestasvalauskas.com.eloquention.screens.Main.MainActivity
import modestasvalauskas.com.eloquention.screens.Main.TitleInterface
import modestasvalauskas.com.eloquention.util.AdapterInterface
import modestasvalauskas.com.eloquention.util.FadingFragment
import modestasvalauskas.com.eloquention.util.ModeAdapter


class SettingsFragment : FadingFragment() {

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater!!.inflate(R.layout.fragment_settings, container, false)
    }

    override fun onStart() {
        super.onStart()

        (activity as TitleInterface).setTitle("Einstellungen")
        (activity as TitleInterface).setSubtitle("")

        val adapter = object : AdapterInterface<Triple<String, String, () -> Unit>> {

            override var data = arrayListOf<Triple<String, String, () -> Unit>>()

            override fun rVBind(holder: RecyclerView.ViewHolder, d: Triple<String, String, () -> Unit>, position: Int) {
                holder.itemView.settingstitle.text = d.first
                holder.itemView.settingssubtitle.text = d.second
                holder.itemView.settingssubtitle.visibility = if (d.second.isEmpty()) View.GONE else View.VISIBLE
                holder.itemView.setOnClickListener {
                    d.third()
                }
            }

            override fun rVLayoutInflater(): Pair<Context, Int> = Pair(context, R.layout.itemsettingscell)

        }

        val rateApp = {
            val appPackageName = context.getPackageName()
            try {
                startActivity(Intent(ACTION_VIEW, Uri.parse("market://details?id=" + appPackageName)))
            } catch (anfe: android.content.ActivityNotFoundException) {
                startActivity(Intent(ACTION_VIEW, Uri.parse("https://play.google.com/store/apps/details?id=" + appPackageName)))
            }
        }

        val openDataSource = {
            val browserIntent = Intent(ACTION_VIEW, Uri.parse("https://www.coinmarketcap.com"))
            startActivity(browserIntent)
        }

        val sendSuggestions = {
            startActivity(createChooser(
                    Intent(ACTION_SEND)
                            .setFlags(FLAG_ACTIVITY_NEW_TASK)
                            .setType("vnd.android.cursor.item/email")
                            .putExtra(EXTRA_EMAIL, arrayOf("mod-val@web.de"))
                            .putExtra(EXTRA_SUBJECT, "Verbesserungsvorschlag")
                            .putExtra(EXTRA_TEXT, "")
                    , resources.getString(R.string.sendmailusing)))
            Unit
        }

        val notifyDeveloperAboutProblems = {
            startActivity(createChooser(
                    Intent(ACTION_SEND)
                            .setFlags(FLAG_ACTIVITY_NEW_TASK)
                            .setType("vnd.android.cursor.item/email")
                            .putExtra(EXTRA_EMAIL, arrayOf("mod-val@web.de"))
                            .putExtra(EXTRA_SUBJECT, "Eloquention Probleme")
                            .putExtra(EXTRA_TEXT, "")
                    , resources.getString(R.string.sendmailusing)))
        }

        val contactDeveloper = {
            val emailIntent = Intent(ACTION_SEND)
            emailIntent.flags = FLAG_ACTIVITY_NEW_TASK
            emailIntent.type = "vnd.android.cursor.item/email"
            emailIntent.putExtra(EXTRA_EMAIL, arrayOf("mod-val@web.de"))
            emailIntent.putExtra(EXTRA_SUBJECT, "Eloquention Kontakt")
            emailIntent.putExtra(EXTRA_TEXT, "")
            startActivity(createChooser(emailIntent, resources.getString(R.string.sendmailusing)))
        }

        val showOSLicenses = {
            MaterialDialog.Builder(context)
                    .title(R.string.oslizenzen)
                    .content(R.string.oslizenzentext)
                    .positiveText(R.string.closedialog)
                    .show()
            Unit
        }

        val resetApp = {
            MaterialDialog.Builder(context)
                    .title("Zurücksetzen?")
                    .content("Möchtest du die App wirklich zurücksetzen?")
                    .positiveText("Ja")
                    .negativeText("Abbrechen")
                    .onPositive { _, _ ->
                        DataManager.reset()
                    }
                    .show()
            Unit
        }

        val restoreIAPPurchases = {
            MaterialDialog.Builder(context)
                    .title("Wiederherstellen")
                    .content("Möchtest du die In-App Käufe wiederherstellen?")
                    .positiveText("Ja")
                    .negativeText("Abbrechen")
                    .onPositive { _, _ ->
                        val purchases = (activity as MainActivity).bp!!.loadOwnedPurchasesFromGoogle()
                        if (!purchases) {
                            Toasty.error(context, "Wiederherstellung fehlgeschlagen", 5, true).show()
                        } else {
                            Toasty.normal(context, "Wiederherstellung erfolgreich", 5).show()
                        }

                    }
                    .show()
            Unit
        }

        adapter.data.add(Triple("Bewerte diese App im Play Store", "Ich würde mich über eine Bewertung freuen", rateApp))
        adapter.data.add(Triple("Quelle", "", openDataSource))
        adapter.data.add(Triple("Verbesserungsvorschläge?", "Klicke hier", sendSuggestions))
        adapter.data.add(Triple("Probleme?", "Klicke hier", notifyDeveloperAboutProblems))
        adapter.data.add(Triple("Kontakt", "Klicke hier", contactDeveloper))
        adapter.data.add(Triple("OS Lizenzen", "", showOSLicenses))
        adapter.data.add(Triple("Zurücksetzen", "", resetApp))
        adapter.data.add(Triple("In-App Käufe wiederherstellen", "", restoreIAPPurchases))

        ModeAdapter.SetAdapterAndNotify(settingsRV, adapter)
    }

}
