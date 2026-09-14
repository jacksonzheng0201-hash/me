const MENU = {
  breakfast: [
    {
      name: "Fluffy Pancakes",
      cuisine: "American",
      time: "20 min",
      servings: 4,
      ingredients: [
        "2 cups all-purpose flour",
        "2 tbsp sugar",
        "1 tbsp baking powder",
        "1/2 tsp salt",
        "2 eggs",
        "1 3/4 cups milk",
        "1/4 cup melted butter",
        "1 tsp vanilla extract"
      ],
      steps: [
        "Whisk flour, sugar, baking powder and salt in a large bowl.",
        "In another bowl, beat eggs, then mix in milk, melted butter and vanilla.",
        "Pour wet ingredients into dry and stir until just combined (lumps are fine).",
        "Heat a non-stick pan over medium heat and lightly grease it.",
        "Pour 1/4 cup batter per pancake. Cook until bubbles form, about 2-3 minutes.",
        "Flip and cook 1-2 more minutes until golden.",
        "Serve warm with syrup and fruit."
      ]
    },
    {
      name: "Scrambled Eggs on Toast",
      cuisine: "American",
      time: "10 min",
      servings: 2,
      ingredients: [
        "4 eggs",
        "2 tbsp butter",
        "Salt and pepper to taste",
        "2 tbsp milk (optional)",
        "2 slices of bread",
        "Chives for garnish"
      ],
      steps: [
        "Crack eggs into a bowl, add milk, salt and pepper, and whisk well.",
        "Toast the bread slices.",
        "Melt butter in a non-stick pan over medium-low heat.",
        "Pour in eggs and stir slowly with a spatula, keeping the heat low.",
        "Remove from heat while slightly runny - they keep cooking off the heat.",
        "Pile eggs on toast and top with chopped chives."
      ]
    },
    {
      name: "Avocado Toast with Egg",
      cuisine: "Mediterranean",
      time: "15 min",
      servings: 2,
      ingredients: [
        "2 slices sourdough bread",
        "1 ripe avocado",
        "2 eggs",
        "1 tsp lemon juice",
        "Red pepper flakes",
        "Salt and pepper",
        "Olive oil for drizzling"
      ],
      steps: [
        "Toast the bread until golden and crisp.",
        "Mash avocado with lemon juice, salt and pepper.",
        "Fry or poach the eggs to your liking.",
        "Spread mashed avocado on toast.",
        "Top each slice with an egg.",
        "Drizzle with olive oil and sprinkle red pepper flakes."
      ]
    },
    {
      name: "French Toast",
      cuisine: "French",
      time: "15 min",
      servings: 4,
      ingredients: [
        "8 thick slices of bread",
        "4 eggs",
        "1 cup milk",
        "2 tbsp sugar",
        "1 tsp cinnamon",
        "1 tsp vanilla extract",
        "Butter for frying",
        "Maple syrup to serve"
      ],
      steps: [
        "Whisk eggs, milk, sugar, cinnamon and vanilla in a shallow dish.",
        "Dip each bread slice in the mixture, coating both sides.",
        "Melt butter in a pan over medium heat.",
        "Cook slices 2-3 minutes per side until golden brown.",
        "Dust with powdered sugar and serve with maple syrup."
      ]
    },
    {
      name: "Berry Oatmeal Bowl",
      cuisine: "International",
      time: "10 min",
      servings: 2,
      ingredients: [
        "1 cup rolled oats",
        "2 cups milk or water",
        "Pinch of salt",
        "1 cup mixed berries",
        "1 tbsp honey",
        "2 tbsp sliced almonds",
        "1 banana, sliced"
      ],
      steps: [
        "Bring milk and a pinch of salt to a gentle simmer.",
        "Stir in oats and cook 5 minutes, stirring occasionally.",
        "Remove from heat and let thicken for 2 minutes.",
        "Spoon into bowls and top with berries and banana.",
        "Drizzle with honey and sprinkle almonds."
      ]
    },
    {
      name: "Cheese Omelette",
      cuisine: "French",
      time: "10 min",
      servings: 1,
      ingredients: [
        "3 eggs",
        "1/4 cup shredded cheddar cheese",
        "1 tbsp butter",
        "Salt and pepper",
        "1 tbsp chopped herbs (optional)"
      ],
      steps: [
        "Beat eggs with salt and pepper until fully combined.",
        "Melt butter in a non-stick pan over medium heat.",
        "Pour in eggs and tilt the pan to spread evenly.",
        "As edges set, push them toward the center, tilting to let uncooked egg flow underneath.",
        "When mostly set, sprinkle cheese over one half.",
        "Fold the omelette in half and slide onto a plate."
      ]
    },
    {
      name: "Breakfast Burrito",
      cuisine: "Mexican",
      time: "25 min",
      servings: 2,
      ingredients: [
        "2 large tortillas",
        "4 eggs",
        "1/2 cup cooked breakfast sausage or bacon",
        "1/2 cup shredded cheese",
        "1/2 cup diced potatoes, cooked",
        "Salsa",
        "Salt and pepper"
      ],
      steps: [
        "Scramble the eggs with salt and pepper in a buttered pan.",
        "Warm the tortillas in a dry pan or microwave.",
        "Layer eggs, meat, potatoes and cheese down the center of each tortilla.",
        "Add salsa to taste.",
        "Fold in the sides and roll up tightly.",
        "Optional: sear seam-side down in a hot pan for 1 minute to seal."
      ]
    },
    {
      name: "Smoothie Bowl",
      cuisine: "International",
      time: "10 min",
      servings: 2,
      ingredients: [
        "2 frozen bananas",
        "1 cup frozen berries",
        "1/2 cup Greek yogurt",
        "1/4 cup milk",
        "Granola for topping",
        "Fresh fruit and seeds for topping"
      ],
      steps: [
        "Add frozen bananas, berries, yogurt and milk to a blender.",
        "Blend until thick and smooth, adding milk sparingly.",
        "Divide between two bowls.",
        "Arrange granola, fresh fruit and seeds on top in sections.",
        "Serve immediately with a spoon."
      ]
    },
    {
      name: "Congee with Soft Eggs",
      cuisine: "Chinese",
      time: "50 min",
      servings: 4,
      ingredients: [
        "3/4 cup jasmine rice",
        "8 cups chicken stock or water",
        "4 eggs",
        "1 tbsp ginger, julienned",
        "2 scallions, sliced",
        "1 tbsp soy sauce",
        "1 tsp sesame oil",
        "Salt to taste"
      ],
      steps: [
        "Rinse the rice until the water runs clear.",
        "Combine rice and stock in a large pot and bring to a boil.",
        "Reduce heat and simmer 40-45 minutes, stirring often, until creamy and porridge-like.",
        "Shortly before serving, poach the eggs gently in a separate pan until whites are set.",
        "Season congee with salt and soy sauce.",
        "Ladle into bowls, top each with an egg, ginger, scallions and sesame oil."
      ]
    },
    {
      name: "Shakshuka",
      cuisine: "Middle Eastern",
      time: "30 min",
      servings: 4,
      ingredients: [
        "2 tbsp olive oil",
        "1 onion, chopped",
        "1 red bell pepper, chopped",
        "3 garlic cloves, minced",
        "1 tsp ground cumin",
        "1 tsp paprika",
        "1 can (28 oz) crushed tomatoes",
        "Salt and pepper",
        "5 eggs",
        "1/3 cup crumbled feta",
        "Fresh parsley",
        "Bread or pita to serve"
      ],
      steps: [
        "Heat olive oil in a large skillet and cook onion and bell pepper until soft, about 8 minutes.",
        "Add garlic, cumin and paprika; cook 1 minute until fragrant.",
        "Pour in crushed tomatoes, season, and simmer 10 minutes until slightly thickened.",
        "Make 5 wells in the sauce and crack an egg into each.",
        "Cover and cook 6-8 minutes until the whites are set but yolks stay runny.",
        "Sprinkle with feta and parsley. Serve with warm bread for dipping."
      ]
    },
    {
      name: "Blueberry Muffins",
      cuisine: "American",
      time: "35 min",
      servings: 12,
      ingredients: [
        "2 cups all-purpose flour",
        "3/4 cup sugar",
        "2 tsp baking powder",
        "1/2 tsp salt",
        "2 eggs",
        "1/2 cup melted butter",
        "3/4 cup milk",
        "1 tsp vanilla extract",
        "1 1/2 cups blueberries",
        "Zest of 1 lemon (optional)"
      ],
      steps: [
        "Preheat oven to 375°F (190°C) and line a 12-cup muffin tin.",
        "Whisk flour, sugar, baking powder and salt in a large bowl.",
        "In another bowl, whisk eggs, melted butter, milk, vanilla and lemon zest.",
        "Fold wet into dry until just combined - do not overmix.",
        "Gently fold in the blueberries.",
        "Divide batter between cups, filling 3/4 full.",
        "Bake 22-25 minutes until golden and a toothpick comes out clean."
      ]
    },
    {
      name: "Menemen",
      cuisine: "Middle Eastern",
      time: "20 min",
      servings: 2,
      ingredients: [
        "2 tbsp olive oil or butter",
        "1 onion, chopped",
        "2 green peppers, chopped",
        "4 ripe tomatoes, grated (or 1 can crushed)",
        "4 eggs",
        "Chili flakes to taste",
        "Salt and pepper",
        "Feta and parsley (optional)",
        "Crusty bread to serve"
      ],
      steps: [
        "Heat oil in a skillet and cook onion and peppers until soft, about 8 minutes.",
        "Add grated tomatoes, salt and chili flakes.",
        "Simmer 10 minutes until the sauce is jammy and reduced.",
        "Make 4 wells and crack an egg into each.",
        "Cover and cook 5-6 minutes until whites are set but yolks are runny.",
        "Crumble feta on top, scatter parsley and scoop it up with crusty bread."
      ]
    },
    {
      name: "Tamagoyaki with Rice",
      cuisine: "Japanese",
      time: "20 min",
      servings: 2,
      ingredients: [
        "4 eggs",
        "1 tbsp sugar",
        "1 tbsp soy sauce",
        "1 tbsp mirin",
        "Pinch of salt",
        "Neutral oil for the pan",
        "2 cups steamed rice",
        "Nori strips and scallions to finish"
      ],
      steps: [
        "Beat eggs gently with sugar, soy sauce, mirin and salt - don't over-whisk.",
        "Oil a small non-stick or rectangular pan over medium heat.",
        "Pour a thin layer of egg and tilt to coat; when half-set, roll it to one side.",
        "Oil the pan again, pour another layer, lifting the rolled egg so egg flows underneath, then roll again.",
        "Repeat until all egg is used; you should have a thick log.",
        "Rest 2 minutes, then slice into thick rounds.",
        "Serve over steamed rice topped with nori and scallions."
      ]
    },
    {
      name: "Full English Breakfast",
      cuisine: "British",
      time: "30 min",
      servings: 2,
      ingredients: [
        "4 sausages",
        "4 strips of bacon",
        "2 eggs",
        "1 cup baked beans",
        "2 tomatoes, halved",
        "1 cup mushrooms, sliced",
        "2 slices of bread and butter",
        "Salt and pepper"
      ],
      steps: [
        "Brown the sausages in a large skillet over medium heat, 10-12 minutes.",
        "Add bacon and cook until crisp; remove everything and keep warm.",
        "Sauté mushrooms in the drippings until golden; fry tomatoes cut-side down.",
        "Warm the baked beans in a small pot.",
        "Fry the eggs to your liking in the same pan.",
        "Toast the bread and plate everything together generously."
      ]
    },
    {
      name: "Crêpes",
      cuisine: "French",
      time: "30 min",
      servings: 8,
      ingredients: [
        "1 cup all-purpose flour",
        "2 eggs",
        "1 1/4 cups milk",
        "Pinch of salt",
        "2 tbsp melted butter",
        "Butter for the pan",
        "Jam, chocolate spread or lemon and sugar to fill"
      ],
      steps: [
        "Blend flour, eggs, milk, salt and melted butter until completely smooth.",
        "Rest the batter 15 minutes (this makes tender crêpes).",
        "Heat a lightly buttered 8-inch pan over medium heat.",
        "Pour a small ladle of batter and swirl to coat thinly.",
        "Cook 1 minute until edges lift, flip and cook 30 seconds more.",
        "Stack finished crêpes on a plate.",
        "Fill with jam, chocolate spread or lemon and sugar, fold and serve."
      ]
    },
    {
      name: "Greek Yogurt Parfait",
      cuisine: "Mediterranean",
      time: "5 min",
      servings: 2,
      ingredients: [
        "2 cups Greek yogurt",
        "1 cup mixed berries",
        "1/2 cup granola",
        "1-2 tbsp honey",
        "Fresh mint (optional)"
      ],
      steps: [
        "Spoon a layer of yogurt into two glasses or bowls.",
        "Add a layer of berries, then a layer of granola.",
        "Drizzle with honey.",
        "Repeat the layers until the glasses are full.",
        "Top with mint and serve immediately so the granola stays crunchy."
      ]
    },
    {
      name: "Breakfast Quesadilla",
      cuisine: "Mexican",
      time: "15 min",
      servings: 2,
      ingredients: [
        "2 large tortillas",
        "4 eggs",
        "1/2 cup shredded cheese",
        "1/2 cup cooked bacon or sausage crumbles",
        "1 tbsp butter",
        "Salsa to serve",
        "Avocado slices (optional)",
        "Salt and pepper"
      ],
      steps: [
        "Soft-scramble the eggs with salt and pepper; set aside.",
        "Butter a clean pan over medium heat.",
        "Lay one tortilla down, sprinkle with half the cheese.",
        "Top with eggs, meat, avocado and remaining cheese, then the second tortilla.",
        "Cook 2-3 minutes per side, pressing gently, until crisp and melty.",
        "Cut into wedges and serve with salsa."
      ]
    }
  ],
  lunch: [
    {
      name: "Grilled Chicken Salad",
      cuisine: "Mediterranean",
      time: "25 min",
      servings: 2,
      ingredients: [
        "2 chicken breasts",
        "6 cups mixed greens",
        "1 cucumber, sliced",
        "1 cup cherry tomatoes, halved",
        "1/4 red onion, thinly sliced",
        "1/4 cup feta cheese",
        "3 tbsp olive oil",
        "1 tbsp balsamic vinegar",
        "1 tsp Dijon mustard"
      ],
      steps: [
        "Season chicken with salt, pepper and a little olive oil.",
        "Grill 5-6 minutes per side until cooked through, then rest 5 minutes and slice.",
        "Whisk olive oil, balsamic vinegar and Dijon into a dressing.",
        "Toss greens, cucumber, tomatoes and onion with most of the dressing.",
        "Top with sliced chicken and feta.",
        "Drizzle remaining dressing and serve."
      ]
    },
    {
      name: "Club Sandwich",
      cuisine: "American",
      time: "15 min",
      servings: 1,
      ingredients: [
        "3 slices of toast bread",
        "3 oz roasted turkey or chicken, sliced",
        "2 strips of bacon",
        "1 tomato, sliced",
        "Lettuce leaves",
        "2 tbsp mayonnaise",
        "Salt and pepper"
      ],
      steps: [
        "Cook bacon until crisp; drain on paper towels.",
        "Toast all three slices of bread.",
        "Spread mayonnaise on one side of each slice.",
        "Layer lettuce and turkey on the first slice.",
        "Stack second slice (mayo side down), then add tomato, lettuce and bacon.",
        "Top with third slice, mayo side down, secure with picks and cut diagonally twice."
      ]
    },
    {
      name: "Tomato Soup & Grilled Cheese",
      cuisine: "American",
      time: "30 min",
      servings: 2,
      ingredients: [
        "2 tbsp butter",
        "1 onion, chopped",
        "2 cans (14 oz) crushed tomatoes",
        "1 cup vegetable broth",
        "1/2 cup heavy cream",
        "Salt, pepper and basil",
        "4 slices of bread",
        "4 slices cheddar cheese"
      ],
      steps: [
        "Melt butter and cook onion until soft, about 5 minutes.",
        "Add crushed tomatoes and broth; simmer 15 minutes.",
        "Blend until smooth, stir in cream, season and keep warm.",
        "Butter the outside of each bread slice.",
        "Place cheese between two slices, grill in a pan over medium heat until golden on both sides.",
        "Serve hot sandwiches with bowls of soup."
      ]
    },
    {
      name: "Chicken Caesar Wrap",
      cuisine: "American",
      time: "15 min",
      servings: 2,
      ingredients: [
        "2 large tortillas",
        "1 cooked chicken breast, sliced",
        "2 cups romaine lettuce, chopped",
        "1/4 cup Parmesan cheese, grated",
        "1/3 cup Caesar dressing",
        "Croutons, crushed (optional)"
      ],
      steps: [
        "Toss chopped romaine with Caesar dressing.",
        "Warm tortillas briefly so they roll easily.",
        "Layer dressed lettuce down the center of each tortilla.",
        "Add chicken slices, Parmesan and crushed croutons.",
        "Roll tightly, folding in the sides as you go.",
        "Cut in half diagonally and serve."
      ]
    },
    {
      name: "Buddha Bowl",
      cuisine: "International",
      time: "35 min",
      servings: 2,
      ingredients: [
        "1 cup quinoa",
        "2 cups water",
        "1 sweet potato, cubed",
        "1 cup chickpeas, drained",
        "2 cups kale, chopped",
        "1 avocado, sliced",
        "2 tbsp tahini",
        "1 tbsp lemon juice",
        "Olive oil, salt, paprika"
      ],
      steps: [
        "Cook quinoa in water for 15 minutes; fluff with a fork.",
        "Toss sweet potato and chickpeas with oil, salt and paprika; roast at 400°F (200°C) for 25 minutes.",
        "Massage kale with a little oil and salt until softened.",
        "Whisk tahini with lemon juice and water to make a drizzle-able sauce.",
        "Arrange quinoa, kale, roasted veggies and avocado in bowls.",
        "Drizzle with tahini sauce."
      ]
    },
    {
      name: "BLT Sandwich",
      cuisine: "American",
      time: "15 min",
      servings: 1,
      ingredients: [
        "2 slices of bread, toasted",
        "4 strips of bacon",
        "2 lettuce leaves",
        "2 tomato slices",
        "1 tbsp mayonnaise",
        "Salt and pepper"
      ],
      steps: [
        "Cook bacon until crisp; drain well.",
        "Spread mayonnaise on both toasted slices.",
        "Layer lettuce, tomato slices and bacon on one slice.",
        "Season tomatoes with salt and pepper.",
        "Top with the second slice, cut and serve."
      ]
    },
    {
      name: "Poke Bowl",
      cuisine: "Hawaiian",
      time: "25 min",
      servings: 2,
      ingredients: [
        "8 oz sushi-grade tuna, cubed",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "1 tsp rice vinegar",
        "1 1/2 cups cooked sushi rice",
        "1/2 cucumber, sliced",
        "1/2 avocado, sliced",
        "Edamame and sesame seeds",
        "Spicy mayo to finish"
      ],
      steps: [
        "Mix soy sauce, sesame oil and rice vinegar; toss with tuna cubes and marinate 10 minutes chilled.",
        "Divide warm sushi rice between two bowls.",
        "Arrange marinated tuna, cucumber, avocado and edamame on top.",
        "Sprinkle with sesame seeds.",
        "Finish with a drizzle of spicy mayo."
      ]
    },
    {
      name: "Egg Fried Rice",
      cuisine: "Chinese",
      time: "20 min",
      servings: 4,
      ingredients: [
        "3 cups cooked day-old rice",
        "3 eggs, beaten",
        "2 tbsp neutral oil",
        "2 garlic cloves, minced",
        "1/2 cup frozen peas and carrots",
        "3 scallions, sliced",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "White pepper to taste"
      ],
      steps: [
        "Heat half the oil in a wok over high heat and scramble the eggs quickly; remove and set aside.",
        "Add remaining oil and stir-fry garlic for 20 seconds.",
        "Add peas and carrots; stir-fry 2 minutes.",
        "Add rice, breaking up clumps, and toss for 3 minutes until hot and slightly toasted.",
        "Return eggs, add soy sauce, sesame oil, white pepper and scallions.",
        "Toss everything together for 1 minute and serve."
      ]
    },
    {
      name: "Miso Ramen",
      cuisine: "Japanese",
      time: "30 min",
      servings: 2,
      ingredients: [
        "2 portions fresh ramen noodles",
        "4 cups chicken stock",
        "3 tbsp white miso paste",
        "1 garlic clove, grated",
        "1 tsp ginger, grated",
        "2 soft-boiled eggs",
        "1/2 cup baby spinach",
        "1/2 cup corn kernels",
        "2 scallions, sliced",
        "1 sheet nori (optional)",
        "Chili oil (optional)"
      ],
      steps: [
        "Bring the stock to a gentle simmer with garlic and ginger.",
        "Whisk miso paste into a ladleful of hot stock, then stir it into the pot. Do not boil hard.",
        "Cook ramen noodles according to package directions; drain.",
        "Briefly wilt the spinach in the broth.",
        "Divide noodles between bowls and ladle hot broth over them.",
        "Top with halved eggs, spinach, corn, scallions, nori and chili oil."
      ]
    },
    {
      name: "Falafel Wrap",
      cuisine: "Middle Eastern",
      time: "25 min",
      servings: 4,
      ingredients: [
        "8 falafel (store-bought mix or homemade)",
        "4 pita breads",
        "1/2 cup tahini",
        "1 lemon, juiced",
        "1 cucumber, diced",
        "2 tomatoes, diced",
        "1 cup shredded lettuce",
        "1/4 red onion, thinly sliced",
        "Pickles (optional)",
        "Olive oil, salt and cumin"
      ],
      steps: [
        "Bake or fry the falafel according to package or recipe directions until crisp.",
        "Whisk tahini with lemon juice, a splash of water, salt and a pinch of cumin until pourable.",
        "Warm the pitas in a dry pan or oven.",
        "Spread tahini sauce over each pita.",
        "Layer lettuce, falafel, cucumber, tomato, onion and pickles.",
        "Drizzle with more sauce, roll up and serve."
      ]
    },
    {
      name: "Beef Pho",
      cuisine: "Vietnamese",
      time: "1 hr 15 min",
      servings: 4,
      ingredients: [
        "8 cups good beef broth (or bones simmered ahead)",
        "1 onion, halved",
        "4 slices fresh ginger",
        "2 star anise",
        "1 cinnamon stick",
        "1 tbsp fish sauce",
        "8 oz flat rice noodles",
        "8 oz beef sirloin, paper-thin sliced",
        "Bean sprouts, Thai basil and cilantro",
        "Lime wedges and sliced chili",
        "Hoisin and sriracha to serve"
      ],
      steps: [
        "Char the onion and ginger directly over a flame or under the broiler until blackened in spots.",
        "Simmer broth with onion, ginger, star anise and cinnamon for 45 minutes; strain and season with fish sauce.",
        "Cook rice noodles per package directions and divide between bowls.",
        "Arrange the raw beef slices on top of the noodles.",
        "Ladle boiling-hot broth over the beef - it cooks it instantly.",
        "Serve immediately with the herb plate, lime, chili and sauces for everyone to customize."
      ]
    },
    {
      name: "Banh Mi",
      cuisine: "Vietnamese",
      time: "25 min",
      servings: 2,
      ingredients: [
        "1 small baguette, cut in half lengthwise",
        "8 oz grilled chicken or pork, sliced",
        "1/4 cup mayonnaise",
        "1 carrot, julienned",
        "1/2 cucumber, julienned",
        "3 tbsp rice vinegar + 1 tsp sugar (quick pickle)",
        "Fresh cilantro sprigs",
        "Jalapeño slices",
        "Sriracha to serve"
      ],
      steps: [
        "Toss carrot with rice vinegar and sugar; pickle 15 minutes.",
        "Split the baguette and lightly toast it.",
        "Spread mayonnaise on both cut sides.",
        "Layer the meat, pickled carrot, cucumber, cilantro and jalapeño.",
        "Drizzle with sriracha, close and press gently.",
        "Cut in half and serve right away."
      ]
    },
    {
      name: "Chicken Shawarma Wrap",
      cuisine: "Middle Eastern",
      time: "35 min",
      servings: 4,
      ingredients: [
        "1 lb chicken thighs",
        "3 tbsp plain yogurt",
        "1 tbsp shawarma spice mix (or cumin, paprika, turmeric, garlic powder)",
        "2 tbsp olive oil",
        "4 flatbreads or pitas",
        "1 cup chopped tomato-cucumber-onion salad",
        "1/2 cup tahini or garlic sauce",
        "Pickles",
        "1 lemon"
      ],
      steps: [
        "Marinate chicken in yogurt, spices, oil, salt and lemon juice for 20 minutes.",
        "Sear or grill the chicken over high heat until charred and cooked through.",
        "Rest 5 minutes, then slice thinly.",
        "Warm the flatbreads.",
        "Spread with sauce, add chicken, salad and pickles.",
        "Squeeze over lemon, roll tightly and toast seam-side down for 1 minute."
      ]
    },
    {
      name: "Caprese Panini",
      cuisine: "Italian",
      time: "15 min",
      servings: 2,
      ingredients: [
        "4 slices ciabatta or sourdough",
        "8 oz fresh mozzarella, sliced",
        "2 tomatoes, sliced",
        "Fresh basil leaves",
        "2 tbsp pesto (or olive oil + balsamic glaze)",
        "Butter for the outsides",
        "Salt"
      ],
      steps: [
        "Layer mozzarella, tomato and basil on two bread slices.",
        "Drizzle with pesto or oil and balsamic; season with salt.",
        "Close the sandwiches and butter the outsides.",
        "Grill in a panini press or heavy skillet over medium heat.",
        "Press down and cook 3-4 minutes per side until golden and melty.",
        "Slice diagonally and serve hot."
      ]
    },
    {
      name: "Niçoise Salad",
      cuisine: "French",
      time: "25 min",
      servings: 2,
      ingredients: [
        "2 cans good tuna (or seared fresh tuna)",
        "2 hard-boiled eggs, halved",
        "1 cup green beans, blanched",
        "2 cups baby potatoes, boiled",
        "1/2 cup cherry tomatoes, halved",
        "1/4 cup olives",
        "Anchovy fillets (optional)",
        "Dressing: 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp Dijon, minced shallot",
        "Lettuce leaves"
      ],
      steps: [
        "Boil potatoes in salted water until tender, about 15 minutes.",
        "Blanch green beans 3 minutes; shock in cold water.",
        "Boil eggs 9 minutes, then peel and halve.",
        "Whisk the dressing ingredients together.",
        "Arrange lettuce on a platter and group potatoes, beans, tomatoes, olives, eggs and tuna in sections.",
        "Drizzle with dressing and serve at room temperature."
      ]
    },
    {
      name: "Bibimbap Bowl",
      cuisine: "Korean",
      time: "40 min",
      servings: 2,
      ingredients: [
        "2 cups cooked short-grain rice",
        "8 oz ground beef",
        "2 cups spinach, blanched",
        "2 carrots, julienned and sautéed",
        "1 cup bean sprouts, blanched",
        "4 shiitake mushrooms, sautéed",
        "2 fried eggs",
        "2 tbsp gochujang",
        "1 tbsp sesame oil + more for vegetables",
        "1 tsp sugar",
        "2 garlic cloves, minced",
        "Sesame seeds"
      ],
      steps: [
        "Sauté each vegetable separately with a little sesame oil, garlic and salt; set aside in piles.",
        "Brown the beef with soy sauce, garlic and sugar until caramelized.",
        "Fry the eggs sunny-side up.",
        "Mix gochujang with sesame oil and sugar for the sauce.",
        "Fill each bowl with warm rice and arrange vegetables and beef in sections on top.",
        "Add a fried egg, dollop with sauce, sprinkle sesame seeds and mix everything before eating."
      ]
    },
    {
      name: "Fish Tacos",
      cuisine: "Mexican",
      time: "25 min",
      servings: 4,
      ingredients: [
        "1 lb white fish fillets (cod or tilapia)",
        "8 small tortillas",
        "1/2 cup flour",
        "1 tsp chili powder + 1 tsp cumin",
        "2 cups shredded cabbage",
        "1/2 cup mayo + juice of 1 lime",
        "1 avocado, sliced",
        "Fresh cilantro",
        "Lime wedges and hot sauce",
        "Oil for frying"
      ],
      steps: [
        "Mix flour with chili powder, cumin and salt; dust the fish all over.",
        "Pan-fry in oil over medium-high heat, 3 minutes per side, until flaky.",
        "Stir mayo with lime juice and a pinch of salt for the crema.",
        "Warm the tortillas in a dry pan.",
        "Flake the fish into the tortillas.",
        "Top with cabbage, crema, avocado and cilantro; finish with lime and hot sauce."
      ]
    },
    {
      name: "Tom Yum Soup",
      cuisine: "Thai",
      time: "25 min",
      servings: 4,
      ingredients: [
        "8 oz shrimp, shell-on",
        "4 cups chicken stock",
        "2 lemongrass stalks, bruised and cut in pieces",
        "4 kaffir lime leaves, torn",
        "1 thumb galangal or ginger, sliced",
        "1 cup mushrooms, halved",
        "2-3 tbsp nam prik pao (Thai chili paste) or tom yum paste",
        "2 tbsp fish sauce",
        "3 tbsp lime juice",
        "Cherry tomatoes, halved",
        "Cilantro and sliced chili"
      ],
      steps: [
        "Simmer the stock with lemongrass, lime leaves and galangal for 10 minutes.",
        "Stir in the chili paste until dissolved.",
        "Add mushrooms and tomatoes; cook 3 minutes.",
        "Add shrimp and simmer 2-3 minutes until pink.",
        "Remove from heat and season with fish sauce and lime juice (don't boil the lime).",
        "Garnish with cilantro and chili; serve steaming hot."
      ]
    }
  ],
  dinner: [
    {
      name: "Spaghetti Carbonara",
      cuisine: "Italian",
      time: "25 min",
      servings: 4,
      ingredients: [
        "12 oz spaghetti",
        "6 oz pancetta or guanciale, diced",
        "4 egg yolks + 1 whole egg",
        "1 cup Pecorino Romano, grated",
        "Black pepper",
        "Salt for pasta water"
      ],
      steps: [
        "Boil salted water and cook spaghetti until al dente.",
        "Render pancetta in a large pan until crisp; turn off heat.",
        "Whisk yolks, whole egg, cheese and lots of black pepper in a bowl.",
        "Reserve 1 cup pasta water; drain pasta.",
        "Toss hot pasta with pancetta off the heat.",
        "Quickly stir in egg mixture, adding pasta water little by little until creamy.",
        "Serve immediately with extra cheese and pepper."
      ]
    },
    {
      name: "Chicken Curry",
      cuisine: "Indian",
      time: "40 min",
      servings: 4,
      ingredients: [
        "1.5 lbs chicken thighs, cubed",
        "1 onion, finely chopped",
        "3 garlic cloves, minced",
        "1 tbsp ginger, grated",
        "2 tbsp curry powder",
        "1 can (14 oz) coconut milk",
        "1 can (14 oz) diced tomatoes",
        "2 tbsp oil",
        "Salt and cilantro"
      ],
      steps: [
        "Heat oil and brown chicken pieces; set aside.",
        "Cook onion until golden, about 8 minutes.",
        "Add garlic, ginger and curry powder; cook 1 minute until fragrant.",
        "Add tomatoes and coconut milk; simmer 5 minutes.",
        "Return chicken and simmer 20 minutes until tender.",
        "Season with salt and garnish with cilantro. Serve with rice."
      ]
    },
    {
      name: "Beef Stir Fry",
      cuisine: "Chinese",
      time: "25 min",
      servings: 4,
      ingredients: [
        "1 lb flank steak, thinly sliced",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp cornstarch",
        "1 bell pepper, sliced",
        "1 cup broccoli florets",
        "2 carrots, julienned",
        "3 garlic cloves, minced",
        "2 tbsp oil",
        "1 tsp sesame oil"
      ],
      steps: [
        "Toss beef with 1 tbsp soy sauce and cornstarch; rest 10 minutes.",
        "Blanch broccoli 2 minutes; drain.",
        "Sear beef in hot oil in batches, 1 minute per side; remove.",
        "Stir-fry garlic and vegetables 3-4 minutes.",
        "Return beef, add remaining soy sauce and oyster sauce.",
        "Toss 1 minute, finish with sesame oil and serve over rice."
      ]
    },
    {
      name: "Kung Pao Chicken",
      cuisine: "Chinese",
      time: "30 min",
      servings: 4,
      ingredients: [
        "1 lb boneless chicken thighs, cubed",
        "3 tbsp soy sauce, divided",
        "1 tbsp cornstarch",
        "2 tsp sugar",
        "1 tbsp black or rice vinegar",
        "1/3 cup roasted peanuts",
        "8 dried red chilies",
        "1 tsp Sichuan peppercorns (optional)",
        "4 garlic cloves, sliced",
        "1 tbsp ginger, minced",
        "3 scallions, cut into pieces",
        "1 red bell pepper, cubed",
        "3 tbsp oil"
      ],
      steps: [
        "Marinate chicken in 1 tbsp soy sauce with cornstarch for 15 minutes.",
        "Mix remaining soy sauce, sugar and vinegar in a small bowl; set aside.",
        "Heat oil in a wok and fry chilies and Sichuan peppercorns for 30 seconds until fragrant.",
        "Add chicken and stir-fry over high heat until golden, about 4 minutes.",
        "Add garlic, ginger, bell pepper and scallion whites; stir-fry 2 minutes.",
        "Pour in the sauce and toss until glossy and thickened.",
        "Stir in peanuts and scallion greens; serve with rice."
      ]
    },
    {
      name: "Beef Tacos",
      cuisine: "Mexican",
      time: "30 min",
      servings: 4,
      ingredients: [
        "1 lb ground beef",
        "1 packet taco seasoning (or 2 tbsp homemade)",
        "1/2 onion, diced",
        "8 taco shells",
        "1 cup shredded lettuce",
        "1 cup shredded cheese",
        "1 tomato, diced",
        "Sour cream and salsa"
      ],
      steps: [
        "Brown beef and onion in a skillet over medium-high heat; drain fat.",
        "Add seasoning and 1/3 cup water; simmer 5 minutes until thickened.",
        "Warm taco shells in the oven per package directions.",
        "Fill shells with seasoned beef.",
        "Top with lettuce, cheese, tomato, sour cream and salsa."
      ]
    },
    {
      name: "Margherita Pizza",
      cuisine: "Italian",
      time: "45 min",
      servings: 2,
      ingredients: [
        "1 lb pizza dough",
        "1/2 cup tomato sauce",
        "6 oz fresh mozzarella, torn",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "Flour for dusting",
        "Salt"
      ],
      steps: [
        "Preheat oven to its highest setting (500°F+) with a pizza stone or inverted sheet inside.",
        "Stretch dough into a 12-inch circle on floured parchment.",
        "Spread a thin layer of sauce, leaving a border.",
        "Scatter mozzarella and drizzle with olive oil.",
        "Slide pizza onto the stone and bake 7-10 minutes until blistered.",
        "Top with fresh basil and a pinch of salt before slicing."
      ]
    },
    {
      name: "Lasagna",
      cuisine: "Italian",
      time: "1 hr 30 min",
      servings: 8,
      ingredients: [
        "12 lasagna noodles",
        "1 lb ground beef",
        "1 jar (24 oz) marinara sauce",
        "15 oz ricotta cheese",
        "1 egg",
        "3 cups shredded mozzarella",
        "1/2 cup grated Parmesan",
        "Fresh basil"
      ],
      steps: [
        "Brown beef in a pot; stir in marinara and simmer 10 minutes.",
        "Mix ricotta with egg, half the Parmesan and some pepper.",
        "Boil noodles until pliable; drain.",
        "Layer in a baking dish: sauce, noodles, ricotta, mozzarella - repeat 3 times.",
        "Finish with sauce, mozzarella and Parmesan on top.",
        "Cover with foil and bake at 375°F (190°C) for 45 minutes; uncover 10 more.",
        "Rest 15 minutes, garnish with basil and slice."
      ]
    },
    {
      name: "Smash Burger",
      cuisine: "American",
      time: "20 min",
      servings: 2,
      ingredients: [
        "1 lb ground beef (80/20), divided into 4 balls",
        "4 burger buns",
        "4 slices American cheese",
        "1/2 onion, thinly sliced",
        "Pickles",
        "Burger sauce (mayo + ketchup + relish)",
        "Salt and pepper"
      ],
      steps: [
        "Heat a cast iron pan or griddle over high heat.",
        "Toast buns cut-side down until golden; set aside.",
        "Place beef balls on the hot surface and smash flat with a spatula.",
        "Season with salt and pepper; cook 90 seconds until deeply crusted.",
        "Flip, add cheese, and cook 45 seconds more.",
        "Stack patties on sauced buns with onion and pickles."
      ]
    },
    {
      name: "Baked Salmon",
      cuisine: "Mediterranean",
      time: "25 min",
      servings: 4,
      ingredients: [
        "4 salmon fillets (6 oz each)",
        "2 tbsp olive oil",
        "2 lemons (1 sliced, 1 juiced)",
        "3 garlic cloves, minced",
        "1 tsp dried dill",
        "Salt and pepper",
        "Asparagus or green beans to serve"
      ],
      steps: [
        "Preheat oven to 400°F (200°C).",
        "Place fillets on a lined sheet pan surrounded by vegetables.",
        "Mix oil, lemon juice, garlic, dill, salt and pepper; spoon over salmon.",
        "Top each fillet with lemon slices.",
        "Bake 12-15 minutes until salmon flakes easily.",
        "Serve with the roasted vegetables and extra lemon."
      ]
    },
    {
      name: "Pad Thai",
      cuisine: "Thai",
      time: "35 min",
      servings: 4,
      ingredients: [
        "8 oz dried rice noodles",
        "8 oz large shrimp, peeled (or chicken)",
        "3 tbsp tamarind paste",
        "3 tbsp fish sauce",
        "1 tbsp brown sugar",
        "2 tbsp vegetable oil",
        "3 garlic cloves, minced",
        "2 eggs",
        "1 cup bean sprouts",
        "3 scallions, cut into 2-inch pieces",
        "1/4 cup crushed roasted peanuts",
        "1 lime, cut into wedges",
        "Chili flakes to serve"
      ],
      steps: [
        "Soak noodles in hot water until pliable but firm; drain.",
        "Stir together tamarind, fish sauce and brown sugar; set aside.",
        "Heat oil in a wok and cook garlic for 20 seconds, then add shrimp and cook until pink.",
        "Push everything aside, crack in the eggs and scramble until just set.",
        "Add noodles and sauce; toss constantly for 2 minutes until tender.",
        "Fold in bean sprouts and scallions.",
        "Serve topped with peanuts, chili flakes and a squeeze of lime."
      ]
    },
    {
      name: "Butter Chicken",
      cuisine: "Indian",
      time: "50 min",
      servings: 4,
      ingredients: [
        "1.5 lbs chicken thighs, cubed",
        "1/2 cup plain yogurt",
        "2 tbsp lemon juice",
        "2 tsp garam masala",
        "1 tsp ground cumin",
        "1 tsp paprika",
        "4 tbsp butter",
        "1 onion, finely chopped",
        "4 garlic cloves, minced",
        "1 tbsp ginger, grated",
        "1 can (14 oz) tomato puree",
        "1 cup heavy cream",
        "Salt and cilantro"
      ],
      steps: [
        "Marinate chicken in yogurt, lemon juice, garam masala, cumin and paprika for 30 minutes.",
        "Sear the chicken in 2 tbsp butter over high heat; remove.",
        "Melt remaining butter and cook onion until golden, about 8 minutes.",
        "Add garlic and ginger; cook 1 minute, then pour in tomato puree and simmer 10 minutes.",
        "Blend the sauce until smooth, return chicken and simmer 10 minutes.",
        "Stir in cream, season with salt and simmer 5 more minutes.",
        "Garnish with cilantro and serve with rice or naan."
      ]
    },
    {
      name: "Teriyaki Chicken",
      cuisine: "Japanese",
      time: "30 min",
      servings: 4,
      ingredients: [
        "4 boneless chicken thighs",
        "1/3 cup soy sauce",
        "1/3 cup mirin",
        "2 tbsp sake",
        "2 tbsp sugar",
        "1 tsp ginger, grated",
        "1 tbsp neutral oil",
        "Sesame seeds and steamed rice to serve"
      ],
      steps: [
        "Whisk soy sauce, mirin, sake, sugar and ginger until the sugar dissolves.",
        "Heat oil in a skillet and cook chicken skin-side down until deep golden, about 6 minutes.",
        "Flip and cook 4 more minutes; pour off excess fat.",
        "Add the teriyaki sauce and simmer, spooning over the chicken, until sticky and glazed, 4-5 minutes.",
        "Rest 2 minutes, then slice into strips.",
        "Serve over steamed rice with extra glaze and sesame seeds."
      ]
    },
    {
      name: "Mapo Tofu",
      cuisine: "Chinese",
      time: "30 min",
      servings: 4,
      ingredients: [
        "14 oz soft tofu, cubed",
        "6 oz ground pork",
        "2 tbsp doubanjiang (chili bean paste)",
        "1 tbsp fermented black beans or miso (optional)",
        "4 garlic cloves, minced",
        "1 tbsp ginger, minced",
        "1 cup chicken stock",
        "1 tbsp cornstarch mixed with 2 tbsp water",
        "2 scallions, sliced",
        "1 tsp ground Sichuan peppercorns",
        "2 tbsp oil"
      ],
      steps: [
        "Blanch the tofu in salted water for 2 minutes; drain carefully.",
        "Brown the pork in oil over high heat, breaking it up.",
        "Add doubanjiang, black beans, garlic and ginger; fry until fragrant and red.",
        "Pour in the stock and bring to a simmer.",
        "Gently slide in the tofu and simmer 5 minutes without stirring much.",
        "Thicken with the cornstarch slurry in two additions.",
        "Finish with scallions and Sichuan pepper; serve over rice."
      ]
    },
    {
      name: "Bulgogi",
      cuisine: "Korean",
      time: "35 min + marinade",
      servings: 4,
      ingredients: [
        "1 lb ribeye or sirloin, very thinly sliced",
        "4 tbsp soy sauce",
        "1 tbsp sugar + 1 tbsp honey",
        "1/2 Asian pear or apple, grated",
        "4 garlic cloves, minced",
        "1 tbsp sesame oil",
        "1/2 onion, sliced",
        "3 scallions, cut into pieces",
        "Sesame seeds",
        "Oil for cooking, rice to serve"
      ],
      steps: [
        "Marinate beef in soy sauce, sugar, honey, pear, garlic and sesame oil for at least 30 minutes.",
        "Heat a heavy pan or grill over high heat until smoking.",
        "Cook beef in batches so it sears rather than stews, 1-2 minutes per side.",
        "Add onion slices in the last minute of the final batch.",
        "Garnish with scallions and sesame seeds.",
        "Serve with rice and lettuce leaves for wrapping."
      ]
    },
    {
      name: "Homemade Sushi Rolls",
      cuisine: "Japanese",
      time: "50 min",
      servings: 4,
      ingredients: [
        "2 cups sushi rice, cooked",
        "3 tbsp rice vinegar + 1 tbsp sugar + 1 tsp salt",
        "4 sheets nori",
        "6 oz sashimi-grade salmon or tuna",
        "1 cucumber, cut into strips",
        "1/2 avocado, sliced",
        "Soy sauce, wasabi and pickled ginger to serve",
        "Bamboo mat"
      ],
      steps: [
        "Fold vinegar mixture into warm rice, then cool to room temperature.",
        "Lay nori shiny-side down on the bamboo mat.",
        "Spread rice evenly, leaving a 1-inch border at the top edge.",
        "Lay fish, cucumber and avocado across the center.",
        "Roll tightly using the mat, sealing the border with a dab of water.",
        "Slice into 8 pieces with a wet knife, wiping between cuts.",
        "Serve with soy sauce, wasabi and ginger."
      ]
    },
    {
      name: "Paella",
      cuisine: "Spanish",
      time: "55 min",
      servings: 4,
      ingredients: [
        "1 1/2 cups bomba or short-grain rice",
        "3 cups warm chicken or seafood stock",
        "Pinch of saffron",
        "6 oz chorizo, sliced",
        "8 oz shrimp",
        "8 mussels, scrubbed",
        "1 onion, chopped",
        "4 garlic cloves, minced",
        "1 red bell pepper, chopped",
        "1 tomato, grated",
        "1/2 cup frozen peas",
        "1 tsp smoked paprika",
        "Olive oil, lemon wedges, parsley"
      ],
      steps: [
        "Brown chorizo in olive oil in a wide paella pan or skillet; remove.",
        "Soften onion and bell pepper 8 minutes; add garlic, tomato and paprika.",
        "Stir in rice for 1 minute, then pour in saffron stock.",
        "Spread everything flat - do not stir again.",
        "Simmer 15 minutes undisturbed.",
        "Nestle shrimp, mussels and peas on top; cover with foil and cook 8 minutes until shells open.",
        "Rest 5 minutes, finish with lemon and parsley."
      ]
    },
    {
      name: "Beef Bourguignon",
      cuisine: "French",
      time: "3 hrs",
      servings: 6,
      ingredients: [
        "3 lbs beef chuck, cubed",
        "4 oz bacon, diced",
        "1 bottle (750 ml) red wine",
        "2 cups beef stock",
        "3 carrots, chunked",
        "1 onion, chopped",
        "3 garlic cloves, crushed",
        "2 tbsp tomato paste",
        "2 tbsp flour",
        "Bouquet of thyme and bay leaf",
        "8 oz pearl onions and 8 oz mushrooms, glazed in butter"
      ],
      steps: [
        "Pat beef dry, season and brown in batches in a Dutch oven; remove.",
        "Render bacon, then cook carrot and onion until golden.",
        "Add garlic and tomato paste; cook 1 minute.",
        "Return beef, sprinkle flour and toss; add wine, stock and herbs.",
        "Cover and braise at 300°F (150°C) for 2.5 hours.",
        "Glaze pearl onions and mushrooms in butter; add for the last 30 minutes.",
        "Reduce sauce if thin; serve with mashed potatoes or crusty bread."
      ]
    },
    {
      name: "Fish and Chips",
      cuisine: "British",
      time: "45 min",
      servings: 4,
      ingredients: [
        "4 cod fillets",
        "1 cup flour + extra for dredging",
        "1 tsp baking powder",
        "3/4 cup cold sparkling water or beer",
        "4 large russet potatoes, cut into thick fries",
        "Oil for deep frying",
        "1 cup peas mashed with butter and mint",
        "Tartar sauce, lemon and malt vinegar"
      ],
      steps: [
        "Heat oil to 350°F (175°C); blanch fries 8 minutes until soft but pale; drain.",
        "Raise oil to 375°F (190°C).",
        "Whisk flour, baking powder, salt and cold sparkling water into a batter.",
        "Dredge fish in flour, then dip in batter.",
        "Fry fish 6-8 minutes until deeply golden; drain on a rack.",
        "Re-fry the fries 3 minutes until crisp and brown.",
        "Salt everything and serve with mushy peas, lemon, tartar sauce and vinegar."
      ]
    },
    {
      name: "Moussaka",
      cuisine: "Greek",
      time: "1 hr 45 min",
      servings: 6,
      ingredients: [
        "2 large eggplants, sliced 1/2 inch thick",
        "1 lb ground lamb or beef",
        "1 onion, chopped",
        "3 garlic cloves, minced",
        "1 can (14 oz) crushed tomatoes",
        "1 tsp cinnamon",
        "1 tsp dried oregano",
        "2 tbsp olive oil",
        "Béchamel: 4 tbsp butter, 4 tbsp flour, 2 1/2 cups milk, 1/2 cup grated cheese, nutmeg, 1 egg yolk"
      ],
      steps: [
        "Salt eggplant slices 30 minutes, pat dry, brush with oil and roast at 400°F (200°C) for 20 minutes.",
        "Brown the meat with onion and garlic; add tomatoes, cinnamon and oregano; simmer 20 minutes.",
        "Make béchamel: melt butter, whisk in flour, add milk gradually, thicken; season with cheese, nutmeg and egg yolk.",
        "Layer half the eggplant, all the meat sauce, then remaining eggplant in a baking dish.",
        "Pour béchamel over the top.",
        "Bake at 375°F (190°C) for 45 minutes until golden.",
        "Rest 20 minutes before slicing - it sets as it cools."
      ]
    },
    {
      name: "Mushroom Risotto",
      cuisine: "Italian",
      time: "40 min",
      servings: 4,
      ingredients: [
        "1 1/2 cups arborio rice",
        "8 oz mixed mushrooms, sliced",
        "5 cups warm vegetable or chicken stock",
        "1/2 cup dry white wine",
        "1 shallot, finely chopped",
        "3 tbsp butter",
        "1/2 cup Parmesan, grated",
        "2 tbsp olive oil",
        "Parsley, salt and pepper"
      ],
      steps: [
        "Sauté mushrooms in olive oil and half the butter until golden; season and remove.",
        "Sweat the shallot in the same pan until translucent.",
        "Add rice and toast 2 minutes until edges look glassy.",
        "Deglaze with wine and stir until absorbed.",
        "Add warm stock one ladle at a time, stirring, about 18 minutes, until creamy and al dente.",
        "Fold in mushrooms, remaining butter and Parmesan.",
        "Rest 2 minutes, adjust seasoning and finish with parsley."
      ]
    },
    {
      name: "Chicken Souvlaki",
      cuisine: "Greek",
      time: "35 min + marinade",
      servings: 4,
      ingredients: [
        "1.5 lbs chicken thighs, cut in chunks",
        "1/4 cup olive oil",
        "Juice of 1 lemon",
        "4 garlic cloves, minced",
        "2 tsp dried oregano",
        "Salt and pepper",
        "Tzatziki: 1 cup Greek yogurt, 1/2 cucumber grated and squeezed dry, 1 garlic clove, 1 tbsp olive oil, dill",
        "4 pitas, tomato slices, red onion",
        "Lemon wedges"
      ],
      steps: [
        "Marinate chicken in oil, lemon juice, garlic, oregano, salt and pepper for 30 minutes.",
        "Thread onto skewers.",
        "Grill or pan-sear 10-12 minutes, turning, until charred and cooked through.",
        "Stir tzatziki ingredients together.",
        "Warm the pitas.",
        "Fill pitas with chicken, tomato, onion and plenty of tzatziki; squeeze lemon over."
      ]
    }
  ]
};

const ING_KEYWORDS = {
  "Eggs": ["egg"],
  "Milk": ["milk"],
  "Butter": ["butter"],
  "Cheese": ["cheese", "parmesan", "mozzarella", "cheddar", "feta", "pecorino"],
  "Yogurt": ["yogurt"],
  "Bread": ["bread", "toast", "bun", "pita", "sourdough", "baguette", "ciabatta", "flatbread"],
  "Flour": ["flour"],
  "Sugar": ["sugar"],
  "Oats": ["oats", "oatmeal"],
  "Rice": ["rice"],
  "Noodles/Pasta": ["spaghetti", "pasta", "noodle", "lasagna"],
  "Potatoes": ["potato"],
  "Onions": ["onion"],
  "Garlic": ["garlic"],
  "Ginger": ["ginger"],
  "Tomatoes": ["tomato"],
  "Bell peppers": ["bell pepper"],
  "Broccoli": ["broccoli"],
  "Carrots": ["carrot"],
  "Cucumber": ["cucumber"],
  "Lettuce/Greens": ["lettuce", "greens", "kale", "spinach", "sprout", "cabbage"],
  "Avocado": ["avocado"],
  "Mushrooms": ["mushroom"],
  "Corn": ["corn"],
  "Bananas": ["banana"],
  "Berries": ["berry", "berries"],
  "Eggplant": ["eggplant", "aubergine"],
  "Lemon": ["lemon"],
  "Lime": ["lime"],
  "Chicken": ["chicken", "turkey"],
  "Beef/Lamb": ["beef", "steak", "lamb"],
  "Bacon/Pork": ["bacon", "pancetta", "guanciale", "pork", "sausage", "chorizo"],
  "Fish/Shrimp": ["salmon", "tuna", "fish", "shrimp", "mussel", "seafood", "cod"],
  "Beans/Chickpeas/Peas": ["bean", "chickpea", "edamame", "falafel", "peas"],
  "Tofu": ["tofu"],
  "Tortillas": ["tortilla"],
  "Coconut milk": ["coconut milk"],
  "Soy sauce": ["soy sauce"],
  "Curry spices": ["curry", "garam masala", "cumin", "turmeric"],
  "Peanuts/Nuts": ["peanut", "almond"],
  "Sesame": ["sesame"],
  "Honey": ["honey"],
  "Herbs/Basil": ["basil", "parsley", "cilantro", "coriander", "dill", "herb", "mint", "oregano"]
};
