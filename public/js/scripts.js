
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
const translations = {
    en: {
        hero_title: "Your Favorite Place to Buy Modern and Simple Furniture",
        hero_text: "Discover our selection of handcrafted and stylish furniture that will make your living space feel like a dream.",
        more: "Find more",
        about_title: "We've got what you need!",
        about_text: "Discover a world of stylish furniture designed to transform your space. From cozy couches that invite relaxation to sleek dining sets that inspire gatherings, we have everything you need to create a home you love. Our carefully curated collection features pieces crafted with quality materials and attention to detail, ensuring both durability and aesthetic appeal. Whether you're looking to redecorate a single room or furnish an entire home, our friendly and knowledgeable staff is here to assist you in finding the perfect pieces to match your style and lifestyle.",
        services_title: "At Your Service",
        services_text1: "Elegance",
        services_text2: "Up to Date",
        services_text3: "Delivery",
        services_text4: "Made with Love",
        services_text1_1: "Find Elegance in our elegant and modern Furniture",
        services_text2_1: "We keep our collections up to date with current fashion",
        services_text3_1: "Fast and Free Delivery",
        services_text4_1: "Our product are made with love and care.",
        item1_title: "Kitchen",
        item1_text: "Modern Kitchen cabinet",
        item2_title: "Bed",
        item2_text: "Simple Kid's Bed",
        item3_title: "Living Room",
        item3_text: "Modern Blue Sofa",
        item4_title: "Dressing room",
        item4_text: "Modern Nightstand",
        item5_title: "Dressing room",
        item5_text: "Simple Modern Wardrobe",
        item6_title: "Bed",
        item6_text: "Modern Red Bed",
        contact_title: "Let's Get In Touch!",
        contact_text: "Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!",
        contact_name: "Full name",
        contact_email: "Email address",
        contact_phone: "Phone number",
        contact_message: "Message",
        address: "Bethel, Apple plaza 2nd floor",
    },
    am: {
        hero_title: "ዘመናዊ እና ቀላል የቤት ዕቃዎችን ለመግዛት የእርስዎ ተወዳጅ ቦታ",
        hero_text: "የመኖሪያ ቦታዎ ህልም እንዲመስልየሚያደርጉትን በእጅ የተሰሩ እና የሚያምሩ የቤት ዕቃዎች ምርጫን ያግኙ።",
        more: "ተጨማሪ",
        about_title: "የሚያስፈልጎት አለን",
        about_text: "ቤቶን ለማስዋብ የተነደፉ የሚያምር የቤት ዕቃዎች እኛ ጋር ያግኙ። መዝናናትን ከሚጋብዙ ሶፋዎች አንስቶ ስብሰባዎችን የሚያነሳሱ ለስላሳ የመመገቢያ ጠረጴዛዎች፣ የሚወዱትን ቤት ለመፍጠር የሚያስፈልግዎ ነገር ሁሉ አለን። በጥንቃቄ የተሰበሰበ ስብስባችን ጥራት ባለው ቁሳቁስ እና ለዝርዝር ትኩረት የተሰሩ የቤት እቃዎችን ያቀርባል። አንድ ክፍልን እንደገና ለማስጌጥ ወይም ሙሉ ቤት ለማስዋብ እየፈለጉ ከሆነ፣ የእኛ ተግባቢ እና ልምድ ባላቸው ሰራተኞቻችን ከእርስዎ ዘይቤ እና የአኗኗር ዘይቤ ጋር የሚዛመዱ ፍጹም ክፍሎችን ለማግኘት እርስዎን ለመርዳት እዚህ አሉ።",
        services_title: "በአገልግሎት ላይ",
        services_text1: "ውበት",
        services_text2: "ወቅታዊ",
        services_text3: "ማድረስ",
        services_text4: "በፍቅር የተሰራ",
        services_text1_1: "በእኛ ውብ እና ዘመናዊ የቤት ዕቃዎች ውስጥ ውበትን ያግኙ",
        services_text2_1: "ስብስቦቻችንን ከአሁኑ ፋሽን ጋር አብረን እናዘምናለን",
        services_text3_1: "ፈጣን እና ነፃ የማድረስ አገልግሎት",
        services_text4_1: "ምርታችን በፍቅር እና በጥንቃቄ የተሰራ ነው።",
        item1_title: "ወጥ ቤት",
        item1_text: "ዘመናዊ የወጥ ቤት ካቢኔ",
        item2_title: "አልጋ",
        item2_text: "ቀላል የልጆች አልጋ",
        item3_title: "ሳሎን",
        item3_text: "ዘመናዊ ሰማያዊ ሶፋ",
        item4_title: "መልበሻ ክፍል",
        item4_text: "ዘመናዊ ኮሞዲኖ",
        item5_title: "መልበሻ ክፍል",
        item5_text: "ቀላል ዘመናዊ ቁም ሣጥን",
        item6_title: "አልጋ",
        item6_text: "ዘመናዊ ቀይ አልጋ",
        contact_title: "እንገናኝ!",
        contact_text: "ቀጣዩን ፕሮጀክትዎን ከእኛ ጋር ለመጀመር ዝግጁ ነዎት? መልእክት ላኩልን እና በተቻለ ፍጥነት ወደ እርስዎ እንመለሳለን!",
        contact_name: "ሙሉ ስም",
        contact_email: "የኢሜል አድራሻ",
        contact_phone: "ስልክ ቁጥር",
        contact_message: "መልእክት",
        address: "ቤተል አፕል ፕላዛ 2ኛ ፎቅ",

    }
}
let hero_title = document.getElementById("hero_title");
let hero_text = document.getElementById("hero_text");
let more = document.getElementById("more");
let about_title = document.getElementById("about_title");
let about_text = document.getElementById("about_text");
let services_title = document.getElementById("services_title");
let services_text1 = document.getElementById("services_text1");
let services_text2 = document.getElementById("services_text2");
let services_text3 = document.getElementById("services_text3");
let services_text4 = document.getElementById("services_text4");
let services_text1_1 = document.getElementById("services_text1_1");
let services_text2_1 = document.getElementById("services_text2_1");
let services_text3_1 = document.getElementById("services_text3_1");
let services_text4_1 = document.getElementById("services_text4_1");
let item1_title = document.getElementById("item1_title");
let item1_text = document.getElementById("item1_text");
let item2_title = document.getElementById("item2_title");
let item2_text = document.getElementById("item2_text");
let item3_title = document.getElementById("item3_title");
let item3_text = document.getElementById("item3_text");
let item4_title = document.getElementById("item4_title");
let item4_text = document.getElementById("item4_text");
let item5_title = document.getElementById("item5_title");
let item5_text = document.getElementById("item5_text");
let item6_title = document.getElementById("item6_title");
let item6_text = document.getElementById("item6_text");
let contact_title = document.getElementById("contact_title");
let contact_text = document.getElementById("contact_text");
let contact_name = document.getElementById("name");
let contact_email = document.getElementById("email");
let contact_phone = document.getElementById("phone");
let contact_message = document.getElementById("message");
let address = document.getElementById("address");

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
})
const setLanguage = (language) => {
    if (language=="en") {
        console.log("English");
        hero_title.innerHTML = translations.en.hero_title;
        hero_text.innerHTML = translations.en.hero_text;
        more.innerHTML = translations.en.more;
        about_title.innerHTML = translations.en.about_title;
        about_text.innerHTML = translations.en.about_text;
        services_title.innerHTML = translations.en.services_title;
        services_text1.innerHTML = translations.en.services_text1;
        services_text2.innerHTML = translations.en.services_text2;
        services_text3.innerHTML = translations.en.services_text3;
        services_text4.innerHTML = translations.en.services_text4;
        services_text1_1.innerHTML = translations.en.services_text1_1;
        services_text2_1.innerHTML = translations.en.services_text2_1;
        services_text3_1.innerHTML = translations.en.services_text3_1;
        services_text4_1.innerHTML = translations.en.services_text4_1;
        item1_title.innerHTML = translations.en.item1_title;
        item1_text.innerHTML = translations.en.item1_text;
        item2_title.innerHTML = translations.en.item2_title;
        item2_text.innerHTML = translations.en.item2_text;
        item3_title.innerHTML = translations.en.item3_title;
        item3_text.innerHTML = translations.en.item3_text;
        item4_title.innerHTML = translations.en.item4_title;
        item4_text.innerHTML = translations.en.item4_text;
        item5_title.innerHTML = translations.en.item5_title;
        item5_text.innerHTML = translations.en.item5_text;
        item6_text.innerHTML = translations.en.item6_text;
        item6_title.innerHTML = translations.en.item6_title;
        contact_title.innerHTML = translations.en.contact_title;
        contact_text.innerHTML = translations.en.contact_text;
        contact_name.innerHTML = translations.en.contact_name;
        contact_email.innerHTML = translations.en.contact_email;
        contact_phone.innerHTML = translations.en.contact_phone;
        contact_message.innerHTML = translations.en.contact_message;
        address.innerHTML = translations.en.address
    } else if (language== 'am') {
        console.log("Amharic");
        hero_title.innerHTML = translations.am.hero_title;
        hero_text.innerHTML = translations.am.hero_text;
        more.innerHTML = translations.am.more;
        about_title.innerHTML = translations.am.about_title;
        about_text.innerHTML = translations.am.about_text;
        services_title.innerHTML = translations.am.services_title;
        services_text1.innerHTML = translations.am.services_text1;
        services_text2.innerHTML = translations.am.services_text2;
        services_text3.innerHTML = translations.am.services_text3;
        services_text4.innerHTML = translations.am.services_text4;
        services_text1_1.innerHTML = translations.am.services_text1_1;
        services_text2_1.innerHTML = translations.am.services_text2_1;
        services_text3_1.innerHTML = translations.am.services_text3_1;
        services_text4_1.innerHTML = translations.am.services_text4_1;
        item1_title.innerHTML = translations.am.item1_title;
        item1_text.innerHTML = translations.am.item1_text;
        item2_title.innerHTML = translations.am.item2_title;
        item2_text.innerHTML = translations.am.item2_text;
        item3_title.innerHTML = translations.am.item3_title;
        item3_text.innerHTML = translations.am.item3_text;
        item4_title.innerHTML = translations.am.item4_title;
        item4_text.innerHTML = translations.am.item4_text;
        item5_title.innerHTML = translations.am.item5_title;
        item5_text.innerHTML = translations.am.item5_text;
        item6_text.innerHTML = translations.am.item6_text;
        item6_title.innerHTML = translations.am.item6_title;
        contact_title.innerHTML = translations.am.contact_title;
        contact_text.innerHTML = translations.am.contact_text;
        contact_name.innerHTML = translations.am.contact_name;
        contact_email.innerHTML = translations.am.contact_email;
        contact_phone.innerHTML = translations.am.contact_phone;
        contact_message.innerHTML = translations.am.contact_message;
        address.innerHTML = translations.am.address
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');  // Get the filter type from the clicked button

      // Get all portfolio items
      const items = document.querySelectorAll('.portfolio-item');

      // If "All" is clicked, show all items
      if (filter === 'All') {
        items.forEach(item => {
          item.style.display = 'block';  // Show all items
        });
      } else {
        // Otherwise, filter items by category
        items.forEach(item => {
          if (item.getAttribute('data-category') === filter) {
            item.style.display = 'block';  // Show matching items
          } else {
            item.style.display = 'none';  // Hide non-matching items
          }
        });
      }

      // Optional: Add active class to highlight the clicked button
      document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });