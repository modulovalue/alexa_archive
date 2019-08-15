package modestasvalauskas.com.eloquention.screens.Main.Fragments.List

import android.content.Context
import android.content.Intent
import android.content.Intent.FLAG_ACTIVITY_REORDER_TO_FRONT
import android.os.Bundle
import android.support.v4.content.ContextCompat
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.fragment_list.view.*
import kotlinx.android.synthetic.main.itemlistscell.view.*
import modestasvalauskas.com.eloquention.R
import modestasvalauskas.com.eloquention.persistence.DataManager
import modestasvalauskas.com.eloquention.persistence.ESD
import modestasvalauskas.com.eloquention.persistence.EloData
import modestasvalauskas.com.eloquention.screens.DisplayWord.SimpleDisplayActivity
import modestasvalauskas.com.eloquention.screens.Main.TitleInterface
import modestasvalauskas.com.eloquention.util.AdapterInterface
import modestasvalauskas.com.eloquention.util.FadingFragment
import modestasvalauskas.com.eloquention.util.ModeAdapter


class ListFragment : FadingFragment(), AdapterInterface<Triple<Int, Pair<Boolean, ESD>, () -> Unit>> {

    override var data: ArrayList<Triple<Int, Pair<Boolean, ESD>, () -> Unit>> = arrayListOf()

    private val titleInterface: TitleInterface by lazy { (activity as TitleInterface) }

    override fun onCreateView(inflater: LayoutInflater?, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val v = inflater!!.inflate(R.layout.fragment_list, container, false)
        data.clear()

        titleInterface.setTitle("Übersicht")
        titleInterface.setSubtitle("${DataManager.unlocked().size}/${EloData.data.size} freigeschaltet")
        val unlocked = DataManager.unlocked()
        EloData.data.forEachIndexed { index: Int, esd: ESD ->
            data.add(Triple(index, Pair(unlocked.contains(esd.id), esd) , {
                startActivity(Intent(context, SimpleDisplayActivity::class.java).setFlags(FLAG_ACTIVITY_REORDER_TO_FRONT).putExtra(SimpleDisplayActivity.DATA, esd))
                activity.overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out)
            }))
        }
        ModeAdapter.SetAdapterAndNotify(v.listRV, this)
        return v
    }

    override fun rVBind(holder: RecyclerView.ViewHolder, d: Triple<Int, Pair<Boolean, ESD>, () -> Unit>, position: Int) {
        if (d.second.first) {
            holder.itemView.lockedlayout.visibility = View.GONE
            holder.itemView.listitemname.text = "${d.second.second.name}"
            holder.itemView.listitemname.setTextColor(ContextCompat.getColor(context, R.color.pureWhite))
            holder.itemView.setOnClickListener { d.third() }
            holder.itemView.cellcontainer.setBackgroundColor(ContextCompat.getColor(context, R.color.colorPrimaryBackground))
        } else {
            holder.itemView.lockedlayout.visibility = View.VISIBLE
            holder.itemView.listitemname.text = "${d.second.second.name.first()}" + (d.second.second.name.map { "  -" }).reduce { a, b ->  a + b }.removeSuffix(" -")
            holder.itemView.listitemname.setTextColor(ContextCompat.getColor(context, R.color.whiteBlass))
            holder.itemView.cellcontainer.setBackgroundColor(ContextCompat.getColor(context,  R.color.colorPrimaryItemCell))
        }
        holder.itemView.listcount.text = "${position + 1}"

    }

    override fun rVLayoutInflater(): Pair<Context, Int> = Pair(activity, R.layout.itemlistscell)
}
