import java.net.URL
import org.apache.commons.lang3.StringUtils

fun main(args: Array<String>) {
    args.forEach {
//        val contents = URL("https://www.wikipedia.com").readText()
        val contents = URL(it).readText()
        val hrefCount = StringUtils.countMatches(contents, "href")
        println("$it $hrefCount")
    }
}