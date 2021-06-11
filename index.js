var introTextDE = "Ich bin ein 18 Jahre alt Schuler und ich möchte ein professioneller WEB Entwickler zu werden! Die Informatik ist mir interessant seit ich sehr klein war (Ich habe meinen ersten Laptop bekommen, wenn ich 10 Jahre alt war). Zuerst habe ich einen Kurs über Ethischen Hacking besucht, wenn ich 15 Jahre alt war, weil er wircklich interessant ausgesieht hat (und er ist). Dann habe ich einen Kurs über WEB entwicklung bei Udemy angefangen. Und jetzt bin ich hier :). Ich kann auch fließend Deutch und Englisch sprechen. Ich habe Erfahrung als Übersetzer.";

var introTextEN = "I am a 18 year old student, aspiring to become a great computer scientis, and this is my CV! Informatics was my interest from a very young age (i got my first laptop at the age of 10).At first when I was 15, I started an ethical hacking course, becouse it seemed really interesting (and it is). Then I started an Udemy course to learn web development and here I am now :). I can also speak fluently german and english, and even have experiance as a translator.";

var descDE = "Ein Web Entwickler";

var descEN = "a Web developer";

var mySkillsDE = "Meine Fähigkeiten"

var mySkillsEN = "My skills";

var ethicalHackingTitleDE = "Ethischen hacking";

var ethicalHackingTitleEN = "Ethical hacking";

var ethicalHackingDescDE = 'Das war die erste Fähigkeit, das ich gemeistert habe. Dadurch habe ich gute Wissen über Operation Systeme, Network Administration, System Administration, Kryptographie, Cloud Computing und das wichtigste - wie man schützt sich von Hackers erworben! Ich habe in "E.H.U Academy" gestudiert';

var ethicalHackingDescEN = 'That was the first computer skill, I ever mastered. Trough it, i have acquired deep understanding of operating systems, network administration, system administration,crypthography, cloud computing and the most important one - how to defend against attackers! I studied ethical hacking in E.h.u. Academy".';

var codingDescDE = "Ich war sehr neugierig zu wissen, wie die Webseiten und die Webanwendungen erstellt wurde. Also, wenn ich mich auf einen Kurs über Webentwicklung bei Udemy gestossen hatte, Entschied ich mich anzumelden.";

var codingDescEN = "I was really curious as to how are all the websites and webapplications made, so when i stumbled across a web development course in Udemy, I decided to enroll.";

var getInTouchDE = "In Kontakt Kommen";

var getInTouchEN = "Get in touch";

var happyToWorkDE = "Ich freue mich für Sie zu arbeiten!";

var happyToWorkEN = "I would be happy to work for you!";

var contactMeDE = "Kontaktiere mich";

var contactMeEN = "Contact me";

var helloDE = "Hallo!";

var helloEN = "Hello!";

var headingDE = "Ich bin Boyan";

var headingEN = "I'm Boyan";

$("#switcher").change(function() {
  if($(this).is(":checked")) {
    $(".intro").text(introTextDE);
    $(".desc").text(descDE);
    $(".my-skills").text(mySkillsDE);
    $(".ethical-hacking-title").text(ethicalHackingTitleDE);
    $(".ethical-hacking-desc").text(ethicalHackingDescDE);
    $(".coding-desc").text(codingDescDE);
    $(".get-in-touch").text(getInTouchDE);
    $(".happy-to-work").text(happyToWorkDE);
    $(".btn").text(contactMeDE);
    $(".hello").text(helloDE);
    $(".heading").text(headingDE);


  }
  else {
    $(".intro").text(introTextEN);
    $(".desc").text(descEN);
    $(".my-skills").text(mySkillsEN);
    $(".ethical-hacking-title").text(ethicalHackingTitleEN);
    $(".ethical-hacking-desc").text(ethicalHackingDescEN);
    $(".coding-desc").text(codingDescEN);
    $(".get-in-touch").text(getInTouchEN);
    $(".happy-to-work").text(happyToWorkEN);
    $(".btn").text(contactMeEN);
    $(".hello").text(helloEN);
    $(".heading").text(headingEN);
  }
})
