<?php

use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
           'StoreID' => 1,
           'StoreName' => "American Girl® Bistro",
           'StoreDescription' => "Visit the American Girl Bistro for a casual dining atmosphere that lets girls be girls. Select from fun appetizers, two-course dinners or rich and creamy choices at the Dessert Counter. Join us for brunch, lunch, dinner or afternoon tea. Plus, there's a special Treat Seat and doll-sized cup and saucer just for her doll. Stop in and dine. Reservations accepted but not required.",
           'StoreLogo' => "http://enozom.com/test/images/img1.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 2,
           'StoreName' => "Benihana",
           'StoreDescription' => "At Benihana, it's not just a meal, it's an experience. Enjoy teppanyaki favorites like Hibachi Steak, Chicken and Shrimp, as well as sushi and sashimi.",
           'StoreLogo' => "http://enozom.com/test/images/img2.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 3,
           'StoreName' => "Bubba Gump Shrimp Co.",
           'StoreDescription' => "Forrest Gump has decided to get in to the restaurant business to share all of his favorite recipes! Bubba Gump Shrimp Co. highlights a huge selection of shrimp and seafood entreiption\": \"Cantina Laredo offers a modern take on Mexican dining with made-from-scratch recipes and hand-squeezed, lime juice margaritas. The extensive fresh menu includes traditional Mexican favorites in addition to many choice items such as grilled fish, chicken and steaks complemented by Cantina Laredo’s signature sauces such as chipotle-wine or sautéed artichoke hearts and roasted red bell peppers. Entrées are priced between $14 and $26. Vegetarian and gluten-free menus are available.",
           'StoreLogo' => "http://enozom.com/test/images/img7.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 8,
           'StoreName' => "Cedar + Stone, Urban Table",
           'StoreDescription' => "Led by celebrated Executive Chef Everton Clarke and Executive Sous Chef Laura Bartholomew, our menu offers refined, crafted dishes inspired by Minnesota’s natural roots and local culture.",
           'StoreLogo' => "http://enozom.com/test/images/img8.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 9,
           'StoreName' => "CRAVE",
           'StoreDescription' => "CRAVE is a concept that truly delivers on one simple thing, fresh and great tasting food brought to life in a chic, casual atmosphere. Enjoy our open kitchen, grand sushi bar and happy hour.",
           'StoreLogo' => "http://enozom.com/test/images/img9.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 10,
           'StoreName' => "Dick's Last Resort",
           'StoreDescription' => "From rug-rats to old farts, from high-class to no-class, from the top of the food chain to the bottom of the barrel, it's fun for all and all in fun for those who dare to enter! Sit back and watch or join in the fun. Dick's has always been known for its outrageous, surly, energetic waitstaff who inflict humor upon our guests. Our atmosphere makes everyone feel like they're temporarily breaking all the rules...and getting away with it.",
           'StoreLogo' => "http://enozom.com/test/images/img10.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 11,
           'StoreName' => "FireLake Grill House + Cocktail Bar",
           'StoreDescription' => "FireLake Grill House & Cocktail Bar features a modern yet comfortable décor, a chic bar area, a craft cocktail list, and deluxe desserts. FireLake has reinvented local dining by capturing the essence of the best that Minnesota has to offer with a farm-to-table concept that incorporates fresh and local produce wherever possible—all with a creative flair and an irresistible presentation. Regionally Grown. Minnesota Inspired. Welcome to FireLake.",
           'StoreLogo' => "http://enozom.com/test/images/img11.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 12,
           'StoreName' => "Hard Rock Cafe",
           'StoreDescription' => "Hard Rock is bringing its music, memorabilia and rock n’ roll flair back to Minnesota.",
           'StoreLogo' => "http://enozom.com/test/images/img12.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 13,
           'StoreName' => "Hooters",
           'StoreDescription' => "This casual, laid back restaurant features good music, sports on the TV and a great menu that includes seafood, sandwiches, burgers and Hooters famous spicy chicken wings.",
           'StoreLogo' => "http://enozom.com/test/images/img13.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 14,
           'StoreName' => "The Lounge @ House of Comedy",
           'StoreDescription' => "This casual, built-to-suit burger bar adjacent to Rick Bronson’s House of Comedy offers something for all burger tastes including Kobe, turkey, chicken and beef.",
           'StoreLogo' => "http://enozom.com/test/images/img14.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 15,
           'StoreName' => "Masu Sushi & Robata",
           'StoreDescription' => "Traditional Japanese cuisine in an upbeat, modern restaurant and bar. Our sustainable offerings throughout our menu features fresh, authentic and traditional Japanese foods. In addition to sushi and robata, our menu includes a substantial selection of noodles including different varieties of udon, soba and ramen.",
           'StoreLogo' => "http://enozom.com/test/images/img15.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 16,
           'StoreName' => "Nordstrom Café",
           'StoreDescription' => "We are committed to offering a superior dining experience in each of our 200 restaurants and specialty coffee bars. Featuring fresh, local ingredients, our menus vary by restaurant type, season and region, with all items made from scratch. In all of our locations, you can relax and enjoy great food, drinks and service with a warm welcome.",
           'StoreLogo' => "http://enozom.com/test/images/img16.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 17,
           'StoreName' => "Rainforest Cafe",
           'StoreDescription' => "A wild place to shop and eat, our dining safari has something for everyone including seafood, beef, chicken, pasta, pizza and an exciting kids menu.",
           'StoreLogo' => "http://enozom.com/test/images/img17.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 18,
           'StoreName' => "Ruby Tuesday",
           'StoreDescription' => "Ruby Tuesday is committed to bringing uncompromising freshness and quality to casual dining, which is obvious with one taste of their unbeatable handcrafted burgers, signature entrees and fresh salad bar.",
           'StoreLogo' => "http://enozom.com/test/images/img18.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 19,
           'StoreName' => "Sky Deck Sports Grille and Lanes",
           'StoreDescription' => "Sky Deck is the new destination at Mall of America featuring Minnesota's most unique bowling experience, an amazing selection of classic and cutting-edge video games, incredible High-def sports viewing and a mouth-watering menu selection of burgers, pizza and more!",
           'StoreLogo' => "http://enozom.com/test/images/img19.jpg",
       ]);
        DB::table('stores')->insert([
           'StoreID' => 20,
           'StoreName' => "TiGER SUSHi",
           'StoreDescription' => "A hip, little sushi bar featuring exceptional sushi and sashimi in addition to a full menu of soups, salads, appetizers, sake, beer and wine.",
           'StoreLogo' => "http://enozom.com/test/images/img20.jpg",
       ]);
   }
}
