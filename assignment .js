// 1. ভেরিয়েবল হচ্ছে একটা পাত্রের মতো, এখানে যেকোন মান ধরে রাখা যায় এবং পরে এই ভেরিয়েবল ধরে কাজ করা যায়।




// 2.variable কে ভালোবেসে সংক্ষেপে var লিখতে হয় , তারপর এর যেকোনো একটি নাম দিতে হয় । তারপর  (=)  সমান চিহ্ন দিয়ে এর মান লিখতে হয় । মান লিখা শেষে (;) চিহ্ন দিতে হয় ।
// যেমন, 
                     var practiceOne = "hello world";
/*ফলাফল দেখতে ঃ-*/ console.log(practiceOne) ;




// 3. যে variable-এ সাধারণ শব্দ / word ব্যাবহার করা হয় ,তাকে stringType variable বলে । stringType variable লিখার সময় অবশ্যই ("" / '' / ``) এদের যেকোনো চিহ্ন ব্যাবহার করতে হয় ।
// যেমন,
                    var practiceTwo = "Its a practice" 
/*ফলাফল দেখতে ঃ-*/ console.log(practiceTwo) ;



// 4. যে variable-এ নাম্বার / সংখ্যা লিখতে হয় তাকে numberType variable বলে ।
// NumberType variable লিখার সময় সুধুমাত্র সংখ্যা লিখতে হয় ।
// যেমন,
                   var practiceThree = 12 ;

/*ফলাফল দেখতে ঃ-*/ console.log(practiceThree) ;



// 5. যে variable এর মাদ্ধমে শুধুমাত্র true অথবা false নির্ণয় করা হয় ,তাকে BooleanType variable বলে । BooleanType variable লিখার সময় সুধুমাত্র true / false লিখতে হয় ।
// যেমন , 
                    var practiceFour = true ;

/*ফলাফল দেখতে ঃ-*/ console.log(practiceFour) ;



// 6. toUpperCase ব্যাবহার করার নিয়ম ঃ- name of variable.toUpperCase()
//     যেমন,
         var mmn = "sfg jfgnjfg jungjgg jngjf gngigf gfngijgniggnig g n iig g";
         console.log(mmn.toUpperCase());

//    toLowerCase ব্যাবহার করার নিয়ম ঃ- name of variable.toLowerCase()
//    যেমন,
        var net = "SFG JFGNJFG JUNGJGG JNGJF GNGIGF GFNGIJGNIGGNIG G N IIG G"
        console.log(net.toLowerCase())




// 7. JavaScript এর মোট ৭ টি অপারেটর আছে ,যথাঃ 
//                                                1. + (Addition)
//                                                2. - (substraction)
//                                                3. * (multiplication)
//                                                4. / (Division)
//                                                5. % (Modulus)
//                                                6. ++ (increment)
//                                                7. -- (decrement)







// 8. কোন ঋণাত্মক সংখ্যাকে ধনাত্তক করতে math.abs ব্যবহার করা হয় ।
// যেমন,
                     var ten = -21;
                     var mn = Math.abs(ten);
/*ফলাফল দেখতে ঃ-*/  console.log(mn)             




// 9. দশমিক এর পরে কোনো সংখ্যা থাকলে , তার মান 1 বৃদ্ধি করতে Math.ceil ব্যাবহার করা হয় ।
// যেমনঃ 12.0001 = 13 , 12.9999 = 13
// উদাহরণ,
                    var twoelve = .1;
                    var cel = Math.ceil(twoelve)
/*ফলাফল দেখতে ঃ-*/ console.log(cel)                    




// 10. ভগ্নাংশ সংখ্যাকে পূর্ণ সংখ্যায় প্রকাশ করতে Math.floor ব্যাবহার করা  হয় । দশমিক এর পরের সংখ্যা গুলো অকার্যকর হয়ে যায় । যেমনঃ 12.9999 = 12  , 0.9999 = 0
// উদাহরণ,
                    var mnbv = 12.100;
                    var vbnm = Math.floor(mnbv)
/*ফলাফল দেখতে ঃ-*/ console.log(vbnm)               



// 11.  ভগ্নাংশ সংখ্যাকে পূর্ণ সংখ্যায় প্রকাশ করতে Math.round ব্যাবহার করা হয় । 0.5 এর বেশি হলে 1 হয় । এবং .5 এর কম হলে 0 হয় । যেমনঃ 12.3445 = 12 , 12.5656= 13
// উদাহরণ,
                    var eleven = 12.4232 ;
                    var vote = Math.round(eleven)
/*ফলাফল দেখতে ঃ-*/ console.log(vote)	




// 12. লটারির মতো করে অনেক সংখার ভিতরে থেকে একটি সংখ্যা বেছে নিতে Math.random ব্যাবহার করা হয় ।
// উদাহরণ,
        var loatry = Math.random() * 120;
        console.log(loatry)  
