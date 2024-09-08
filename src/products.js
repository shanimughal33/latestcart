import pic1 from "./assets/images/pizza.png";
import pic2 from "./assets/images/cake1.png";
import pic3 from "./assets/images/burger.png";
import pic4 from "./assets/images/chikencurry.webp";
import pic5 from "./assets/images/burger.png";
import pic6 from "./assets/images/pizza.png";
import pic7 from "./assets/images/cake1.png";
import pic8 from "./assets/images/chikencurry.webp";

export const products = [
    
        {
            id: 1,
            name: 'Classic Cheeseburger',
            price: 9.99,
            originalPrice: 12.99,  
            rating: 4.5,
            image: pic1,
            description: 'Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and onions on a toasted bun.',
            slug: 'classic-cheeseburger',
            category: 'Burgers',
        },
        
    
    {
        id: 2,
        name: 'Double Bacon Burger',
        price: 12.99,
        image: pic2,
        description: 'Two beef patties with crispy bacon, cheddar cheese, lettuce, tomato, and BBQ sauce.',
        slug: 'double-bacon-burger',
        category: 'Burgers',
    },
    {
        id: 3,
        name: 'Veggie Burger',
        price: 8.99,
        image: pic3,
        description: 'Grilled vegetable patty with lettuce, tomato, pickles, and avocado spread on a whole wheat bun.',
        slug: 'veggie-burger',
        category: 'Burgers',
    },
    // Pizza
    {
        id: 4,
        name: 'Margherita Pizza',
        price: 10.99,
        image: pic4,
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil on a thin crust.',
        slug: 'margherita-pizza',
        category: 'Pizza',
    },
    {
        id: 5,
        name: 'Pepperoni Pizza',
        price: 11.99,
        image: pic5,
        description: 'Spicy pepperoni slices on a bed of mozzarella cheese with a rich tomato sauce.',
        slug: 'pepperoni-pizza',
        category: 'Pizza',
    },
    {
        id: 6,
        name: 'BBQ Chicken Pizza',
        price: 12.99,
        image: pic6,
        description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a crispy crust.',
        slug: 'bbq-chicken-pizza',
        category: 'Pizza',
    },
    // Sushi
    {
        id: 7,
        name: 'California Roll',
        price: 8.99,
        image: pic7,
        description: 'Crab, avocado, and cucumber rolled in rice and seaweed, topped with sesame seeds.',
        slug: 'california-roll',
        category: 'Sushi',
    },
    {
        id: 8,
        name: 'Spicy Tuna Roll',
        price: 9.99,
        image: pic8,
        description: 'Fresh tuna mixed with spicy mayo and scallions, rolled in rice and seaweed.',
        slug: 'spicy-tuna-roll',
        category: 'Sushi',
    },
    {
        id: 9,
        name: 'Salmon Nigiri',
        price: 6.99,
        image: pic1,
        description: 'Sliced fresh salmon on a bed of vinegared rice, served with soy sauce and wasabi.',
        slug: 'salmon-nigiri',
        category: 'Sushi',
    },
    // Fried Chicken
    {
        id: 10,
        name: 'Crispy Fried Chicken',
        price: 11.99,
        image: pic2,
        description: 'Golden brown fried chicken with a crispy coating, served with a side of coleslaw.',
        slug: 'crispy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 11,
        name: 'Spicy Fried Chicken',
        price: 12.99,
        image: pic3,
        description: 'Fried chicken with a spicy coating, served with a side of fries.',
        slug: 'spicy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 12,
        name: 'Chicken Wings',
        price: 10.99,
        image: pic4,
        description: 'Buffalo-style chicken wings served with blue cheese dip and celery sticks.',
        slug: 'chicken-wings',
        category: 'Fried Chicken',
    },
    // Pasta
    {
        id: 13,
        name: 'Spaghetti Bolognese',
        price: 12.99,
        image: pic5,
        description: 'Classic Italian pasta dish with a rich meat sauce made from ground beef and tomatoes.',
        slug: 'spaghetti-bolognese',
        category: 'Pasta',
    },
    {
        id: 14,
        name: 'Fettuccine Alfredo',
        price: 13.99,
        image: pic6,
        description: 'Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan cheese.',
        slug: 'fettuccine-alfredo',
        category: 'Pasta',
    },
    {
        id: 15,
        name: 'Penne Arrabbiata',
        price: 11.99,
        image: pic7,
        description: 'Penne pasta in a spicy tomato sauce with garlic and red chili peppers.',
        slug: 'penne-arrabbiata',
        category: 'Pasta',
    },
    // Desserts
    {
        id: 16,
        name: 'Chocolate Lava Cake',
        price: 7.99,
        image: pic8,
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        slug: 'chocolate-lava-cake',
        category: 'Desserts',
    },
    {
        id: 17,
        name: 'Cheesecake',
        price: 6.99,
        image: pic1,
        description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with strawberry sauce.',
        slug: 'cheesecake',
        category: 'Desserts',
    },
    {
        id: 18,
        name: 'Tiramisu',
        price: 8.99,
        image: pic2,
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        slug: 'tiramisu',
        category: 'Desserts',
    },
    // Beverages
    {
        id: 19,
        name: 'Coca Cola',
        price: 1.99,
        image: pic3,
        description: 'Chilled 12oz can of Coca Cola.',
        slug: 'coca-cola',
        category: 'Beverages',
    },
    {
        id: 20,
        name: 'Lemonade',
        price: 2.99,
        image: pic4,
        description: 'Freshly squeezed lemonade with a hint of mint.',
        slug: 'lemonade',
        category: 'Beverages',
    },
    {
        id: 21,
        name: 'Iced Coffee',
        price: 3.99,
        image: pic5,
        description: 'Cold brew coffee with milk and sugar.',
        slug: 'iced-coffee',
        category: 'Beverages',
    },
    {
        id: 22,
        name: 'Classic Cheeseburger',
        price: 9.99,
        image: pic1,
        description: 'Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and onions on a toasted bun.',
        slug: 'classic-cheeseburger',
        category: 'Burgers',
    },
    {
        id: 23,
        name: 'Double Bacon Burger',
        price: 12.99,
        image: pic2,
        description: 'Two beef patties with crispy bacon, cheddar cheese, lettuce, tomato, and BBQ sauce.',
        slug: 'double-bacon-burger',
        category: 'Burgers',
    },
    {
        id: 24,
        name: 'Veggie Burger',
        price: 8.99,
        image: pic3,
        description: 'Grilled vegetable patty with lettuce, tomato, pickles, and avocado spread on a whole wheat bun.',
        slug: 'veggie-burger',
        category: 'Burgers',
    },
    // Pizza
    {
        id: 25,
        name: 'Margherita Pizza',
        price: 10.99,
        image: pic4,
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil on a thin crust.',
        slug: 'margherita-pizza',
        category: 'Pizza',
    },
    {
        id: 26,
        name: 'Pepperoni Pizza',
        price: 11.99,
        image: pic5,
        description: 'Spicy pepperoni slices on a bed of mozzarella cheese with a rich tomato sauce.',
        slug: 'pepperoni-pizza',
        category: 'Pizza',
    },
    {
        id: 27,
        name: 'BBQ Chicken Pizza',
        price: 12.99,
        image: pic6,
        description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a crispy crust.',
        slug: 'bbq-chicken-pizza',
        category: 'Pizza',
    },
    // Sushi
    {
        id: 28,
        name: 'California Roll',
        price: 8.99,
        image: pic7,
        description: 'Crab, avocado, and cucumber rolled in rice and seaweed, topped with sesame seeds.',
        slug: 'california-roll',
        category: 'Sushi',
    },
    {
        id: 29,
        name: 'Spicy Tuna Roll',
        price: 9.99,
        image: pic8,
        description: 'Fresh tuna mixed with spicy mayo and scallions, rolled in rice and seaweed.',
        slug: 'spicy-tuna-roll',
        category: 'Sushi',
    },
    {
        id: 30,
        name: 'Salmon Nigiri',
        price: 6.99,
        image: pic1,
        description: 'Sliced fresh salmon on a bed of vinegared rice, served with soy sauce and wasabi.',
        slug: 'salmon-nigiri',
        category: 'Sushi',
    },
    // Fried Chicken
    {
        id: 31,
        name: 'Crispy Fried Chicken',
        price: 11.99,
        image: pic2,
        description: 'Golden brown fried chicken with a crispy coating, served with a side of coleslaw.',
        slug: 'crispy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 32,
        name: 'Spicy Fried Chicken',
        price: 12.99,
        image: pic3,
        description: 'Fried chicken with a spicy coating, served with a side of fries.',
        slug: 'spicy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 33,
        name: 'Chicken Wings',
        price: 10.99,
        image: pic4,
        description: 'Buffalo-style chicken wings served with blue cheese dip and celery sticks.',
        slug: 'chicken-wings',
        category: 'Fried Chicken',
    },
    // Pasta
    {
        id: 34,
        name: 'Spaghetti Bolognese',
        price: 12.99,
        image: pic5,
        description: 'Classic Italian pasta dish with a rich meat sauce made from ground beef and tomatoes.',
        slug: 'spaghetti-bolognese',
        category: 'Pasta',
    },
    {
        id: 35,
        name: 'Fettuccine Alfredo',
        price: 13.99,
        image: pic6,
        description: 'Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan cheese.',
        slug: 'fettuccine-alfredo',
        category: 'Pasta',
    },
    {
        id: 36,
        name: 'Penne Arrabbiata',
        price: 11.99,
        image: pic7,
        description: 'Penne pasta in a spicy tomato sauce with garlic and red chili peppers.',
        slug: 'penne-arrabbiata',
        category: 'Pasta',
    },
    // Desserts
    {
        id: 37,
        name: 'Chocolate Lava Cake',
        price: 7.99,
        image: pic8,
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        slug: 'chocolate-lava-cake',
        category: 'Desserts',
    },
    {
        id: 38,
        name: 'Cheesecake',
        price: 6.99,
        image: pic1,
        description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with strawberry sauce.',
        slug: 'cheesecake',
        category: 'Desserts',
    },
    {
        id: 39,
        name: 'Tiramisu',
        price: 8.99,
        image: pic2,
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        slug: 'tiramisu',
        category: 'Desserts',
    },
    // Beverages
    {
        id: 40,
        name: 'Coca Cola',
        price: 1.99,
        image: pic3,
        description: 'Chilled 12oz can of Coca Cola.',
        slug: 'coca-cola',
        category: 'Beverages',
    },
    {
        id: 41,
        name: 'Lemonade',
        price: 2.99,
        image: pic4,
        description: 'Freshly squeezed lemonade with a hint of mint.',
        slug: 'lemonade',
        category: 'Beverages',
    },
    {
        id: 42,
        name: 'Iced Coffee',
        price: 3.99,
        image: pic5,
        description: 'Cold brew coffee with milk and sugar.',
        slug: 'iced-coffee',
        category: 'Beverages',
    },
    {
        id: 43,
        name: 'Classic Cheeseburger',
        price: 9.99,
        image: pic1,
        description: 'Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and onions on a toasted bun.',
        slug: 'classic-cheeseburger',
        category: 'Burgers',
    },
    {
        id: 44,
        name: 'Double Bacon Burger',
        price: 12.99,
        image: pic2,
        description: 'Two beef patties with crispy bacon, cheddar cheese, lettuce, tomato, and BBQ sauce.',
        slug: 'double-bacon-burger',
        category: 'Burgers',
    },
    {
        id: 45,
        name: 'Veggie Burger',
        price: 8.99,
        image: pic3,
        description: 'Grilled vegetable patty with lettuce, tomato, pickles, and avocado spread on a whole wheat bun.',
        slug: 'veggie-burger',
        category: 'Burgers',
    },
    // Pizza
    {
        id: 46,
        name: 'Margherita Pizza',
        price: 10.99,
        image: pic4,
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil on a thin crust.',
        slug: 'margherita-pizza',
        category: 'Pizza',
    },
    {
        id: 47,
        name: 'Pepperoni Pizza',
        price: 11.99,
        image: pic5,
        description: 'Spicy pepperoni slices on a bed of mozzarella cheese with a rich tomato sauce.',
        slug: 'pepperoni-pizza',
        category: 'Pizza',
    },
    {
        id: 48,
        name: 'BBQ Chicken Pizza',
        price: 12.99,
        image: pic6,
        description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a crispy crust.',
        slug: 'bbq-chicken-pizza',
        category: 'Pizza',
    },
    // Sushi
    {
        id: 49,
        name: 'California Roll',
        price: 8.99,
        image: pic7,
        description: 'Crab, avocado, and cucumber rolled in rice and seaweed, topped with sesame seeds.',
        slug: 'california-roll',
        category: 'Sushi',
    },
    {
        id: 50,
        name: 'Spicy Tuna Roll',
        price: 9.99,
        image: pic8,
        description: 'Fresh tuna mixed with spicy mayo and scallions, rolled in rice and seaweed.',
        slug: 'spicy-tuna-roll',
        category: 'Sushi',
    },
    {
        id: 51,
        name: 'Salmon Nigiri',
        price: 6.99,
        image: pic1,
        description: 'Sliced fresh salmon on a bed of vinegared rice, served with soy sauce and wasabi.',
        slug: 'salmon-nigiri',
        category: 'Sushi',
    },
    // Fried Chicken
    {
        id: 52,
        name: 'Crispy Fried Chicken',
        price: 11.99,
        image: pic2,
        description: 'Golden brown fried chicken with a crispy coating, served with a side of coleslaw.',
        slug: 'crispy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 53,
        name: 'Spicy Fried Chicken',
        price: 12.99,
        image: pic3,
        description: 'Fried chicken with a spicy coating, served with a side of fries.',
        slug: 'spicy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 54,
        name: 'Chicken Wings',
        price: 10.99,
        image: pic4,
        description: 'Buffalo-style chicken wings served with blue cheese dip and celery sticks.',
        slug: 'chicken-wings',
        category: 'Fried Chicken',
    },
    // Pasta
    {
        id: 55,
        name: 'Spaghetti Bolognese',
        price: 12.99,
        image: pic5,
        description: 'Classic Italian pasta dish with a rich meat sauce made from ground beef and tomatoes.',
        slug: 'spaghetti-bolognese',
        category: 'Pasta',
    },
    {
        id: 56,
        name: 'Fettuccine Alfredo',
        price: 13.99,
        image: pic6,
        description: 'Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan cheese.',
        slug: 'fettuccine-alfredo',
        category: 'Pasta',
    },
    {
        id: 57,
        name: 'Penne Arrabbiata',
        price: 11.99,
        image: pic7,
        description: 'Penne pasta in a spicy tomato sauce with garlic and red chili peppers.',
        slug: 'penne-arrabbiata',
        category: 'Pasta',
    },
    // Desserts
    {
        id: 58,
        name: 'Chocolate Lava Cake',
        price: 7.99,
        image: pic8,
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        slug: 'chocolate-lava-cake',
        category: 'Desserts',
    },
    {
        id: 59,
        name: 'Cheesecake',
        price: 6.99,
        image: pic1,
        description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with strawberry sauce.',
        slug: 'cheesecake',
        category: 'Desserts',
    },
    {
        id: 60,
        name: 'Tiramisu',
        price: 8.99,
        image: pic2,
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        slug: 'tiramisu',
        category: 'Desserts',
    },
    // Beverages
    {
        id: 61,
        name: 'Coca Cola',
        price: 1.99,
        image: pic3,
        description: 'Chilled 12oz can of Coca Cola.',
        slug: 'coca-cola',
        category: 'Beverages',
    },
    {
        id: 62,
        name: 'Lemonade',
        price: 2.99,
        image: pic4,
        description: 'Freshly squeezed lemonade with a hint of mint.',
        slug: 'lemonade',
        category: 'Beverages',
    },
    {
        id: 63,
        name: 'Iced Coffee',
        price: 3.99,
        image: pic5,
        description: 'Cold brew coffee with milk and sugar.',
        slug: 'iced-coffee',
        category: 'Beverages',
    },
    {
        id: 64,
        name: 'Classic Cheeseburger',
        price: 9.99,
        image: pic1,
        description: 'Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and onions on a toasted bun.',
        slug: 'classic-cheeseburger',
        category: 'Burgers',
    },
    {
        id: 65,
        name: 'Double Bacon Burger',
        price: 12.99,
        image: pic2,
        description: 'Two beef patties with crispy bacon, cheddar cheese, lettuce, tomato, and BBQ sauce.',
        slug: 'double-bacon-burger',
        category: 'Burgers',
    },
    {
        id: 66,
        name: 'Veggie Burger',
        price: 8.99,
        image: pic3,
        description: 'Grilled vegetable patty with lettuce, tomato, pickles, and avocado spread on a whole wheat bun.',
        slug: 'veggie-burger',
        category: 'Burgers',
    },
    // Pizza
    {
        id: 67,
        name: 'Margherita Pizza',
        price: 10.99,
        image: pic4,
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil on a thin crust.',
        slug: 'margherita-pizza',
        category: 'Pizza',
    },
    {
        id: 68,
        name: 'Pepperoni Pizza',
        price: 11.99,
        image: pic5,
        description: 'Spicy pepperoni slices on a bed of mozzarella cheese with a rich tomato sauce.',
        slug: 'pepperoni-pizza',
        category: 'Pizza',
    },
    {
        id: 69,
        name: 'BBQ Chicken Pizza',
        price: 12.99,
        image: pic6,
        description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a crispy crust.',
        slug: 'bbq-chicken-pizza',
        category: 'Pizza',
    },
    // Sushi
    {
        id: 70,
        name: 'California Roll',
        price: 8.99,
        image: pic7,
        description: 'Crab, avocado, and cucumber rolled in rice and seaweed, topped with sesame seeds.',
        slug: 'california-roll',
        category: 'Sushi',
    },
    {
        id: 71,
        name: 'Spicy Tuna Roll',
        price: 9.99,
        image: pic8,
        description: 'Fresh tuna mixed with spicy mayo and scallions, rolled in rice and seaweed.',
        slug: 'spicy-tuna-roll',
        category: 'Sushi',
    },
    {
        id: 72,
        name: 'Salmon Nigiri',
        price: 6.99,
        image: pic1,
        description: 'Sliced fresh salmon on a bed of vinegared rice, served with soy sauce and wasabi.',
        slug: 'salmon-nigiri',
        category: 'Sushi',
    },
    // Fried Chicken
    {
        id: 73,
        name: 'Crispy Fried Chicken',
        price: 11.99,
        image: pic2,
        description: 'Golden brown fried chicken with a crispy coating, served with a side of coleslaw.',
        slug: 'crispy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 74,
        name: 'Spicy Fried Chicken',
        price: 12.99,
        image: pic3,
        description: 'Fried chicken with a spicy coating, served with a side of fries.',
        slug: 'spicy-fried-chicken',
        category: 'Fried Chicken',
    },
    {
        id: 75,
        name: 'Chicken Wings',
        price: 10.99,
        image: pic4,
        description: 'Buffalo-style chicken wings served with blue cheese dip and celery sticks.',
        slug: 'chicken-wings',
        category: 'Fried Chicken',
    },
    // Pasta
    {
        id: 76,
        name: 'Spaghetti Bolognese',
        price: 12.99,
        image: pic5,
        description: 'Classic Italian pasta dish with a rich meat sauce made from ground beef and tomatoes.',
        slug: 'spaghetti-bolognese',
        category: 'Pasta',
    },
    {
        id: 77,
        name: 'Fettuccine Alfredo',
        price: 13.99,
        image: pic6,
        description: 'Creamy Alfredo sauce over fettuccine noodles, topped with Parmesan cheese.',
        slug: 'fettuccine-alfredo',
        category: 'Pasta',
    },
    {
        id: 78,
        name: 'Penne Arrabbiata',
        price: 11.99,
        image: pic7,
        description: 'Penne pasta in a spicy tomato sauce with garlic and red chili peppers.',
        slug: 'penne-arrabbiata',
        category: 'Pasta',
    },
    // Desserts
    {
        id: 79,
        name: 'Chocolate Lava Cake',
        price: 7.99,
        image: pic8,
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
        slug: 'chocolate-lava-cake',
        category: 'Desserts',
    },
    {
        id: 80,
        name: 'Cheesecake',
        price: 6.99,
        image: pic1,
        description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with strawberry sauce.',
        slug: 'cheesecake',
        category: 'Desserts',
    },
    {
        id: 81,
        name: 'Tiramisu',
        price: 8.99,
        image: pic2,
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        slug: 'tiramisu',
        category: 'Desserts',
    },
    // Beverages
    {
        id: 82,
        name: 'Coca Cola',
        price: 1.99,
        image: pic3,
        description: 'Chilled 12oz can of Coca Cola.',
        slug: 'coca-cola',
        category: 'Beverages',
    },
    {
        id: 83,
        name: 'Lemonade',
        price: 2.99,
        image: pic4,
        description: 'Freshly squeezed lemonade with a hint of mint.',
        slug: 'lemonade',
        category: 'Beverages',
    },
    {
        id: 84,
        name: 'Iced Coffee',
        price: 3.99,
        image: pic5,
        description: 'Cold brew coffee with milk and sugar.',
        slug: 'iced-coffee',
        category: 'Beverages',
    },
    {
        id: 85,
        name: 'Iced Coffee',
        price: 3.99,
        image: pic5,
        description: 'Cold brew coffee with milk and sugar.',
        slug: 'iced-coffee',
        category: 'Beverages',
    },
    // More categories and items...

    // The same structure can be expanded to 100 items by following the same pattern.
];
