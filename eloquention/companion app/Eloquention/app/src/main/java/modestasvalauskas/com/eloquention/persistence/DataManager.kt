package modestasvalauskas.com.eloquention.persistence

import io.paperdb.Book
import io.paperdb.Paper
import org.apache.commons.lang3.time.DateUtils
import org.joda.time.DateTime
import java.util.*


object DataManager {

    var DATA = "transaction"

    var BOOKNAME = "bookname"

    var IAPUnlockedKey = "iapunlocked"

    fun unlock(esd: ESD) {
        val newMap = unlocked()
        newMap.put(esd.id, DateTime.now().toDate())
        save(newMap)
    }

    fun unlockable(): ArrayList<ESD> {
        val unlocked = unlocked()
        return ArrayList(EloData.data.filter { !unlocked.containsKey(it.id) })
    }

    fun save(map: MutableMap<Int, Date>) {
        book().write(DATA, map)
    }

    fun unlocked(): MutableMap<Int, Date> {
        return book().read<MutableMap<Int, Date>>(DATA, mutableMapOf())
    }

    fun reset() {
        book().destroy()
    }

    fun book(): Book {
        return Paper.book(BOOKNAME)
    }

    fun todayUnlocked(): Int {
        return unlocked().filter { DateUtils.isSameDay(DateTime.now().toDate(), it.value) }.size
    }

    fun leftToday(): Int {
        if (iAPUnlocked()) {
            return EloData.data.size - DataManager.unlocked().size
        } else {
            return dailylimit() - todayUnlocked()
        }
    }

    fun dailylimit(): Int {
        if (iAPUnlocked()) {
            return EloData.data.size
        } else {
            return 12
        }
    }


    fun iAPUnlocked(): Boolean {
        return book().read<Boolean>(IAPUnlockedKey, false)
    }

    fun unlockIAP(boolean: Boolean) {
        book().write(IAPUnlockedKey, boolean)
    }

}