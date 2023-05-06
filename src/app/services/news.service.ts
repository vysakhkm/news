import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getallnews() {
    let news =
    {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "4 Dead In Firing At Punjab Military Station, Search Ops On - NDTV",
          "description": "Four deaths have been reported in an incident of firing inside Bathinda Military Station in Punjab early this morning.",
          "url": "https://www.ndtv.com/india-news/four-dead-in-firing-at-military-station-in-punjabs-bathinda-in-early-hours-3940644",
          "urlToImage": "https://c.ndtvimg.com/2023-04/me14q52o_bathinda-shots_625x300_12_April_23.jpg",
          "publishedAt": "2023-04-12T04:22:00Z",
          "content": "The police said all four gates of the cantonment have been shut.\r\nBathinda (Punjab): Four deaths have been reported in an incident of firing inside Bathinda Military Station in Punjab early this morn… [+769 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Universe Today"
          },
          "author": "Laurence Tognetti",
          "title": "Saturn's Rings Warm Up its Atmosphere - Universe Today",
          "description": "Saturn’s rings are one of the most well-known features throughout astronomy. While much is known about them, they still make headlines from time to time. This includes a recent study involving an international team of researchers that could help paint a clear…",
          "url": "https://www.universetoday.com/160906/saturns-rings-warm-up-its-atmosphere/",
          "urlToImage": "https://www.universetoday.com/wp-content/uploads/2023/04/hubble_saturnlymanalpha_stsci-01gw30qm3c2wx3vhpp1a67x48w.jpg",
          "publishedAt": "2023-04-12T04:20:07Z",
          "content": "Saturns rings are one of the most well-known features throughout astronomy. While much is known about them, they still make headlines from time to time. This includes a recent study involving an inte… [+4422 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "News18"
          },
          "author": "Majid Alam",
          "title": "Ukraine Facing Shortfalls, Egypt Arming Russia, British Forces in Kyiv: Key Revelations of Leaked US Docs - News18",
          "description": "The document said that Ukraine's ability to provide medium-range air defences to protect the front line will be completely reduced by May 23",
          "url": "https://www.news18.com/world/ukraine-facing-shortfalls-egypt-arming-russia-british-forces-in-kyiv-key-revelations-of-leaked-us-docs-7524361.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-87-1-168126800016x9.jpg",
          "publishedAt": "2023-04-12T04:08:00Z",
          "content": "US intelligence has serious concerns about Ukraines capability in the ongoing war and warned that Kyiv might fail to amass sufficient troops and weaponry for its planned spring counter-offensive and … [+2949 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Sachin Pilot In Delhi Today After Defying Congress With Protest - NDTV",
          "description": "After defying party leadership with a public protest against his party-led government in Rajasthan, senior Congress leader Sachin Pilot is heading to Delhi today, reportedly to meet the party leadership. While the possibility of Mr Pilot meeting seni",
          "url": "https://www.ndtv.com/india-news/after-public-protest-sachin-pilot-in-delhi-today-may-meet-congress-leadership-3940498",
          "urlToImage": "https://c.ndtvimg.com/2023-04/ud1aona8_sachin-pilot_625x300_11_April_23.jpg",
          "publishedAt": "2023-04-12T04:07:30Z",
          "content": "Sachin Pilot's fast on Tuesday drew a stern warning from the Congress.\r\nNew Delhi: After defying party leadership with a public protest against his party-led government in Rajasthan, senior Congress … [+2505 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Entertainment Desk",
          "title": "Celina hits back at troll who accused her of ‘sleeping with Fardeen, Feroz Khan’ - Hindustan Times",
          "description": "Celina Jaitly responded with fury to a Twitter user, who said she had relations with both actor Fardeen Khan and his son Feroz Khan. | Bollywood",
          "url": "https://www.hindustantimes.com/entertainment/bollywood/celina-jaitly-hits-back-at-troll-who-accused-her-of-sleeping-with-fardeen-khan-feroz-khan-101681268101363.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/celina_jaitley_1681268194862_1681268195029_1681268195029.jpeg",
          "publishedAt": "2023-04-12T03:48:35Z",
          "content": "Celina Jaitly has responded to a Twitter troll, who shared an unsavoury comment about her. Celina hit back with strong words as he accused her of sleeping with actor Fardeen Khan and his father, late… [+1788 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Bodycam Footage Shows How US Cops Took Down Bank Shooter Who Killed 5 - NDTV",
          "description": "The body camera footage of two police officers shows the moment 25-year-old bank employee Connon Sturgeon was shot dead after he killed five of his co-workers and injured eight others, including a policeman, at a bank in US's Kentucky.",
          "url": "https://www.ndtv.com/world-news/bodycam-footage-shows-how-us-cops-took-down-bank-shooter-who-killed-5-3940587",
          "urlToImage": "https://c.ndtvimg.com/2023-04/f3f1i63o_bodycam-us-bank-shooter-_625x300_12_April_23.jpg",
          "publishedAt": "2023-04-12T03:45:31Z",
          "content": "The video shows two police officers arriving at scene of the shooting.\r\nThe body camera footage of two police officers shows the moment 25-year-old bank employee Connon Sturgeon was shot dead after h… [+1921 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "\"Typical Congressman\": Anil Antony On \"Unfollow\" Call On Twitter - NDTV",
          "description": "Former Congress leader from Kerala Anil Antony, who joined the BJP last week, today took a swipe at a Congress leader for asking party leaders and workers to unfollow him on Twitter.",
          "url": "https://www.ndtv.com/india-news/anil-antony-on-unfollow-call-by-kerala-congress-leader-t-siddique-on-twitter-typical-congressman-3940582",
          "urlToImage": "https://c.ndtvimg.com/2023-04/60hdb3fo_anil-antony_625x300_06_April_23.jpg",
          "publishedAt": "2023-04-12T03:42:21Z",
          "content": "Anil Antony, the son of veteran Congress leader AK Antony, joined the BJP last week.\r\nNew Delhi: Former Congress leader from Kerala Anil Antony, who joined the BJP last week, today took a swipe at a … [+2207 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Aniruddha Dhar",
          "title": "Ukraine's Zelensky writes to PM Modi, seeks additional humanitarian aid - Hindustan Times",
          "description": "Ukraine has requested India for additional medicines and medical equipment, the external affairs ministry said. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/ukraines-zelensky-writes-to-pm-modi-seeks-additional-humanitarian-aid-101681270552781.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/Modi_zelensky_1681270705844_1681270711122_1681270711122.jpg",
          "publishedAt": "2023-04-12T03:40:10Z",
          "content": "Ukraine has requested India for additional medicines and medical equipment, the external affairs ministry said on Wednesday. The request, in a letter by President Volodymyr Zelensky to Prime Minister… [+437 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Garena Free Fire Max redeem codes April 12, 2023: Get weapons, diamonds, more | Mint - Mint",
          "description": "Developers of the game keep updating these codes daily. There is also a dedicated microsite where players can visit to redeem the available codes.",
          "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-april-12-2023-get-weapons-diamonds-more-11681268985736.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/12/600x338/ff_garena_1675312885509_1681269076782_1681269076782.jpg",
          "publishedAt": "2023-04-12T03:11:25Z",
          "content": "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+1985 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": null,
          "title": "'Thirsty' Suhana Khan drinks water, gets CONFUSED while posing for paps - Indiatimes.com",
          "description": "Suhana Khan is one of the most loved celebrities and will soon make her big debut in Zoya Akhtar's 'The Archies'. Now, the diva has become the muse of a well-known international makeup brand and her fans are absolutely thrilled. Yes, you read that right. A fe…",
          "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/thirsty-suhana-khan-drinks-water-gets-confused-while-posing-for-paps/videoshow/99422165.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/99422165/size-41040/99422165.jpg",
          "publishedAt": "2023-04-12T03:10:45Z",
          "content": "Suhana Khan\r\n is one of the most loved celebrities and will soon make her big debut in Zoya Akhtar's 'The Archies'. Now, the diva has become the muse of a well-known international makeup brand and he… [+327 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Chaitanya Deshpande",
          "title": "CRC empowering adultsliving with Parkinson’s - Times of India",
          "description": "Nagpur: April 11 was celebrated as World Parkinson’s Day.",
          "url": "https://timesofindia.indiatimes.com/city/nagpur/crc-empowering-adultsliving-with-parkinsons/articleshow/99421578.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-04-12T02:53:00Z",
          "content": "FOLLOW US ON SOCIAL MEDIAFacebookTwitterInstagramKOO APPYOUTUBE"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "India Today Web Desk",
          "title": "At least 100 killed in air strike by Myanmar junta on Pazigyi village - India Today",
          "description": "Myanmar's ruling junta confirmed that it carried out an air strike on a village in which at least 100 people, including many children and reporters, were killed.",
          "url": "https://www.indiatoday.in/world/story/myanmar-junta-confirms-air-strike-on-kanbalu-village-several-killed-2358807-2023-04-12",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/ezgif.com-webp-to-jpg_46-sixteen_nine.jpg?VersionId=GFcVoNixF0uLp3LggbOkbxjBVLj_fchA",
          "publishedAt": "2023-04-12T02:48:45Z",
          "content": "By India Today Web Desk: Myanmar's ruling junta confirmed that it carried out an air strike on Tuesday on a village in which at least 100 people, including many children and reporters, were killed. T… [+2413 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "NDTV Sports Desk",
          "title": "\"Utter Rubbish\": Ex-Pakistan Captain Shuts Down IPL Commentator For Virat Kohli Criticism - NDTV Sports",
          "description": "Former New Zealand pacer Simon Doull, who is on commentary duty for IPL 2023, felt that Virat Kohli was \"concerned about a milestone\".",
          "url": "https://sports.ndtv.com/ipl-2023/utter-rubbish-ex-pakistan-captain-shuts-down-ipl-commentator-for-virat-kohli-criticism-3938895",
          "urlToImage": "https://c.ndtvimg.com/2023-04/j09bpf0o_virat-kohli-afp_625x300_11_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-04-12T02:44:50Z",
          "content": "Virat Kohli slammed his 46th half-century in the Indian Premier League on Monday against the Lucknow Super Giants. The former RCB captain reached the 50-run mark in 35 balls, registering his second f… [+1737 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "AFP",
          "title": "French president Macron kissing Xi Jinping's \"ass\": Donald Trump - Hindustan Times",
          "description": "Macron caused a storm after a state visit to China last week in which he cautioned Europeans should not chain themselves to US foreign policy. | World News",
          "url": "https://www.hindustantimes.com/world-news/french-president-macron-kissing-xi-jinping-s-ass-donald-trump-101681264830003.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/China-France-65_1680777812482_1680777812482_1681265817128_1681265817128.jpg",
          "publishedAt": "2023-04-12T02:35:39Z",
          "content": "French President Emmanuel Macron has been in China meeting with Xi Jinping and \"kissing his ass,\" Donald Trump said Tuesday.\r\nChinese President Xi Jinping, right, shakes hands with France's President… [+1830 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bavarian Football Works"
          },
          "author": "CSmith1919",
          "title": "All dressed up and nowhere to go: Bayern Munich’s Thomas Müller mostly watched Manchester City smash his team - Bavarian Football Works",
          "description": "Bayern Munich’s starting XI was...questionable.",
          "url": "https://www.bavarianfootballworks.com/2023/4/12/23679545/bayern-munich-thomas-muller-manchester-city-champions-league-tuchel-haaland-upamecano-guardiola-sane",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/HMroTgAHiW5VogI9hMXoqJuy_eg=/0x0:3432x1797/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24578793/1251627742.jpg",
          "publishedAt": "2023-04-12T02:30:00Z",
          "content": "Bayern Munich star Thomas Müller was left out of the starting XI by new coach Thomas Tuchel and only entered the game in the 80th minute after the game was too fare gone too affect.\r\nIt was likely a … [+1268 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Entertainment Desk",
          "title": "Sushmita Sen goes shopping with ex Rohman Shawl, daughter Alisah; people judge her for 'throwing' bottle on road - Hindustan Times",
          "description": "Sushmita Sen was spotted on an outing with rumoured boyfriend Rohman Shawl and daughter Alisah in Mumbai late Tuesday.  | Bollywood",
          "url": "https://www.hindustantimes.com/entertainment/bollywood/sushmita-sen-goes-shopping-with-ex-rohman-shawl-daughter-alisah-101681264585650.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/sushmita_sen_rohman_shawl_1681266000811_1681266001067_1681266001067.jpg",
          "publishedAt": "2023-04-12T02:24:39Z",
          "content": "Sushmita Sen seems to have reunited with her ex-boyfriend Rohman Shawl after their break up last year. The two were spotted shopping in Mumbai late Tuesday along with her younger daughter Alisah. She… [+2116 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "TCS Q4 results today: Key things to watch out for | Mint - Mint",
          "description": "In December 2022 quarter, TCS garnered a net profit of  ₹10,846 crore attributable to shareholders on a consolidated basis up by 11.02% YoY and 3.98% QoQ",
          "url": "https://www.livemint.com/market/stock-market-news/tcs-q4-results-today-key-things-to-watch-out-for-11681261857885.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/12/600x338/TCS_1681265079605_1681265079812_1681265079812.jpg",
          "publishedAt": "2023-04-12T02:07:02Z",
          "content": "Tata Group-backed TCS will kick start the fourth quarterly earning season for India Inc today with its financial results. The fourth quarterly results of FY23 are for the three months between January… [+2326 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "ETMarkets.com",
          "title": "SGX Nifty up 10 points; here's what changed for market while you were sleeping - The Economic Times",
          "description": "Foreign portfolio investors (FPIs) continue to remain net buyers Rs 342 crore at the end of last week. DIIs, on the other hand, sold shares worth Rs 264 crore.",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/sgx-nifty-up-10-points-heres-what-changed-for-market-while-you-were-sleeping/articleshow/99414387.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-99414396,width-1070,height-580,imgsize-80439,overlay-etmarkets/photo.jpg",
          "publishedAt": "2023-04-12T01:56:00Z",
          "content": "Nifty has gained for the seventh consecutive day supported on the back of strong global trends and consistent FII buying. Shares of IT major TCS will be in focus ahead of its fourth quarter numbers d… [+3023 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Watch: Ganguly, Ponting clueless as Warner's inaccurate last-ball throw hurts DC - Hindustan Times",
          "description": "DC head coach Ponting, Director of Cricket Ganguly were both left stupefied at the dug out as Warner's inaccurate throw handed MI their maiden win in IPL 2023 | Cricket",
          "url": "https://www.hindustantimes.com/cricket/watch-ganguly-ponting-clueless-after-warner-s-inaccurate-throw-hurts-dc-as-mi-win-last-ball-thriller-due-to-david-dive-in-ipl-2023-101681236947809.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/11/1600x900/mi_vs_dc_1681237387878_1681237403114_1681237403114.jpg",
          "publishedAt": "2023-04-12T01:47:38Z",
          "content": "For the third successive night, IPL 2023 produced a thriller with the chasing team scripting an entertaining win on all occasions. It was Kolkata Knight Riders' Rinku Singh on Sunday night against Gu… [+2454 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBCTV18"
          },
          "author": "Yoosef K",
          "title": "Buying The Dip: Lic Increases Stake In Most Adani Group Companies Post Hindenburg Saga - CNBCTV18",
          "description": "Retail investors bought more shares of NDTV, Ambuja Cements and Adani Enterprises in the three months through March, according to shareholding data sourced from BSE.",
          "url": "https://www.cnbctv18.com/market/stocks/lic-increases-stake-in-most-adani-group-companies-gas-enterprises-green-ports-ndtv-ambuja-16379661.htm",
          "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2020/02/81c1654fc30f61abff3be7258cfbf21f.jpg",
          "publishedAt": "2023-04-12T01:40:54Z",
          "content": "Next Article\r\nTrade Setup for April 12: Nifty 50 is 80 points adrift of this key level; TCS, inflation data in focus"
        }
      ]
    }
    return news
  }

  exchangerate(){
    return fetch("https://v6.exchangerate-api.com/v6/2f2c5f78958ba06e2d92d868/latest/USD")
  }
}

