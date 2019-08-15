package modestasvalauskas.com.eloquention.screens.DisplayWord

import android.content.Context
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.fragment_display_word.*
import kotlinx.android.synthetic.main.fragment_display_word.view.*
import modestasvalauskas.com.eloquention.R


class DisplayWordFragment : Fragment() {

    val esdInterface: ESDInterface by lazy { activity as ESDInterface }

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater!!.inflate(R.layout.fragment_display_word, container, false)
    }

    override fun onViewCreated(view: View?, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        wordname.text = esdInterface.getESD().name
        worddefinition.text = esdInterface.getESD().definition

        displaywordcontainer.removeAllViews()

        esdInterface.getESD().examples.forEach {
            val newLine = (context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater).inflate(R.layout.fragment_display_word, null).wordexample
            (newLine.parent as ViewGroup).removeView(newLine)
            newLine.text = it
            displaywordcontainer.addView(newLine)
        }
    }

}
