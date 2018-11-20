function LoadTheArchive(TotalFeed) 
{
    var PostTitles = new Array();
    var PostURLs = new Array();
    var PostYears = new Array();
    var PostMonths = new Array();

    if("entry" in TotalFeed.feed) 
    {
      var PostEntries=TotalFeed.feed.entry.length;

      document.write("共计发布了 " + PostEntries + " 篇博文<br /><br />");

      for(var PostNum=0; PostNum<PostEntries ; PostNum++) 
      {
        var  ThisPost = TotalFeed.feed.entry[PostNum];
             PostTitles.push(ThisPost.title.$t);
             PostYears.push(ThisPost.published.$t.substring(0,4));
             PostMonths.push(ThisPost.published.$t.substring(5,7));
        var ThisPostURL;

        for(var LinkNum=0; LinkNum < ThisPost.link.length; LinkNum++) 
        {
           if(ThisPost.link[LinkNum].rel == "alternate") 
           {
               ThisPostURL = ThisPost.link[LinkNum].href;
               break
           }
        }

        PostURLs.push(ThisPostURL);
       }
    }

    DisplaytheTOC(PostTitles, PostURLs, PostYears, PostMonths);
}

function DisplaytheTOC(PostTitles, PostURLs, PostYears, PostMonths)
{
    var MonthNames=["一","二","三","四","五","六","七","八","九","十","十一","十二"];
    var NumberOfEntries=PostTitles.length;

    var currentMonth = "";
    var currentYear = "";

    for(var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++)
    {
      NameOfMonth = MonthNames[parseInt(PostMonths[EntryNum],10)-1];

      if (currentMonth != NameOfMonth || currentYear != PostYears[EntryNum]) {
        currentMonth = NameOfMonth;
        currentYear = PostYears[EntryNum];

        document.write("<div class='dateStyle'><br />" + currentYear + "年 " + currentMonth + "月</div>");
      }

      document.write('<a href ="'+PostURLs[EntryNum]+'">'+"&emsp;&emsp;&emsp;&ensp;"+PostTitles[EntryNum]+"</a><br />");
    }
   
   document.write('<br />');
}