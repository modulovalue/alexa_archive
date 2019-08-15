package modestasvalauskas.com.eloquention.util

import android.content.Context
import android.support.v4.content.ContextCompat
import android.support.v7.widget.DividerItemDecoration
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.ViewGroup
import modestasvalauskas.com.eloquention.R


interface AdapterInterface<T> {

    var data: ArrayList<T>

    fun rVBind(holder: RecyclerView.ViewHolder, d: T, position: Int)

    fun rVLayoutInflater(): Pair<Context, Int>

    fun RVCount(): Int {
        return data.count()
    }

}

class RVAdapter<T>(var adapterInterface: AdapterInterface<T>) : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    override fun getItemCount(): Int {
        return adapterInterface.RVCount()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return object : RecyclerView.ViewHolder(LayoutInflater.from(adapterInterface.rVLayoutInflater().first).inflate(adapterInterface.rVLayoutInflater().second, parent, false)) {}
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        adapterInterface.rVBind(holder, adapterInterface.data.get(position), position)
    }

}

object ModeAdapter {

    fun <T> SetAdapterAndNotify(rv: RecyclerView, ai: AdapterInterface<T>) {
        rv.layoutManager = LinearLayoutManager(rv.context)
        rv.adapter = RVAdapter(ai)
        rv.removeItemDecoration(rv.getItemDecorationAt(0))
        rv.addItemDecoration(DividerItemDecoration(rv.context, DividerItemDecoration.VERTICAL).apply {
            setDrawable(ContextCompat.getDrawable(rv.context, R.drawable.horizontal_divider))
        })
        rv.adapter.notifyDataSetChanged()
    }

}