# Fork notes

- 20200415 不需要更改代码，复制进页面即可直接使用
- 月份中文显示
- 20181121 重新添加日期显示，调整对齐
- 调整了代码缩进
- 理论上可以显示大于 500 行。感谢：水口八记 [建立 Blogger 存档页面（三）（突破500篇限制）](https://blog.shuiba.co/create-blogger-archive-page-3)


# Make Archive Page in Blogger

This little piece of JavaScript takes JSON from the the Google API for Blogger and outputs html that can be interpretted by the blogging platform to produce a hyperlinked list of blog titles followed by the date. An example might be

> [GitHub for Mac 1.2: Snow Octocat](https://github.com/blog/1067-github-for-mac-1-2-snow-octocat) (March 2, 2012)

(Provided the GitHub blog were on Blogger.)

The archive style was inspired by the [ET notebooks][1] by Edward Tufte.

## How to implement it

If your blog is at the site

    http://thisisanawesomeblog.blogspot.com

then you copy and paste the following the code into your the html for your new page in Blogger:

    <script type="text/javascript" src="http://cloud.github.com/downloads/jhwilson/Create-a-Blogger-archive-page/Make-Blogger-Archive-Page.js">
    </script>
    <script src="http://thisisanawesomeblog.blogspot.com/feeds/posts/default?max-results=500&amp;alt=json-in-script&amp;callback=LoadTheArchive">
    </script>

Remember to change the code in the second script call to match your blog URL!

[1]:http://www.edwardtufte.com/bboard/q-and-a?topic_id=1
