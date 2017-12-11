myApp.controller('ArticleCtrl', function ($scope, $timeout, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/article.html");
    TemplateService.title = "Article"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.selectedContent = {
        heading: "5 things to remember while over splurging",
        img: "img/article1.png",
        content: {
            txt: "Why did I even buy this?” – If you keep asking yourself this question often, then you are over splurging. We often get into shopping mode whenever we are bored. It starts with window shopping and then before you realize, you either come home with those rich looking matte paper shopping bags, or you get messages from your bank about the amount debited on those online shopping sites.To curb the splurging, we need to consciously be strict about our spending behavior and remember the below mentioned five points.",
            subheading: [{
                    heading: "Jot down your shopping list",
                    content: "Most of the time, we end up going to the store not knowing what we need and randomly pick up things that are not required. To avoid this mistake, write down your monthly shopping list two days before your salary gets credited. Strike off the items that aren’t of importance for that month or mark it optional. Since you have already prioritized your shopping needs, you end up sticking to the list and avoid gazing around the store and overspending or buying unnecessary things.",
                },
                {
                    heading: "Stick to the plan",
                    content: "When there is a function to attend, we would want to look our best. Nothing wrong in that, but to avoid over splurging, it is better to decide and finalize on what we are looking for and then get into action mode. Decide what type of attire you want, how much you can afford to spend for that, is it practical to buy something so expensive and keep it lying in a corner of your closet after that one time. This will help you zero down on the right product. Choose the right shop, decide your budget, finalize the style and then get to the shopping mode. Look around in other shops and choose the one that is best suited and thrifty."
                },
                {
                    heading: "Say NO to last minute shopping",
                    content: "Ensure that your shopping plans are always made well in advance. Prioritize the events you would be taking part in. Decide if you need shopping for the same, set aside a budget and start saving for the same at least 2 months before the event. When you know you have a cousin’s engagement in the next 3 months, start saving for it and aim to shop for it a month before the event. Last minute shopping will cost you a bomb. There is always a sale going on – make use of it. But remember to buy what’s necessary and stay away from overspending. Your mantra should be - Needs should be addressed and wants should be suppressed!"
                }, {
                    heading: "Save first and spend later",
                    content: "I know it is easier said than done, but when you get your paycheck, put aside a certain percentage of it in a savings mode of your choice. This has to be the norm, not an option. The savings need not be something extravagant, it could be 5% of your earnings or 50%; it totally depends on you. The idea is to save a percentage of your earnings and then spend with whatever you are left with."
                },
                {
                    heading: "Prepare the monthly budget",
                    content: "Always have your monthly budget regularly prepared so you can allocate a reasonable budget for everything. If you want to dedicate 10% of your earnings for groceries, then ensure you don’t go overboard and stock only what is necessary. Same applies to eating out and weekend entertainment expenses. This way, you are aware of your cash limits and will not have the urge to spend lavishly. Self-control is extremely important. Ensure you don’t go overboard and stick to your budget. The bottom line is splurging is fine when it happens once in a while, but when it becomes a routine; it is necessary to control yourself to avoid getting into financial trouble."
                }
            ]
        }
    }

    // json structure for articlelist
    // $scope.selectedContent = 
    //    {
    //         heading: "",
    //         img: "",
    //         content: {
    //             txt: "",
    //             subheading: [{
    //                 heading: "",
    //                 content: ''
    //             }]
    //         }
    //    }

    $scope.articlelist = [{
            heading: "5 things to remember while over splurging",
            img: "img/article1.png",
            content: {
                txt: "Why did I even buy this?” – If you keep asking yourself this question often, then you are over splurging. We often get into shopping mode whenever we are bored. It starts with window shopping and then before you realize, you either come home with those rich looking matte paper shopping bags, or you get messages from your bank about the amount debited on those online shopping sites.To curb the splurging, we need to consciously be strict about our spending behavior and remember the below mentioned five points.",
                subheading: [{
                        heading: "Jot down your shopping list",
                        content: "Most of the time, we end up going to the store not knowing what we need and randomly pick up things that are not required. To avoid this mistake, write down your monthly shopping list two days before your salary gets credited. Strike off the items that aren’t of importance for that month or mark it optional. Since you have already prioritized your shopping needs, you end up sticking to the list and avoid gazing around the store and overspending or buying unnecessary things.",
                    },
                    {
                        heading: "Stick to the plan",
                        content: "When there is a function to attend, we would want to look our best. Nothing wrong in that, but to avoid over splurging, it is better to decide and finalize on what we are looking for and then get into action mode. Decide what type of attire you want, how much you can afford to spend for that, is it practical to buy something so expensive and keep it lying in a corner of your closet after that one time. This will help you zero down on the right product. Choose the right shop, decide your budget, finalize the style and then get to the shopping mode. Look around in other shops and choose the one that is best suited and thrifty."
                    },
                    {
                        heading: "Say NO to last minute shopping",
                        content: "Ensure that your shopping plans are always made well in advance. Prioritize the events you would be taking part in. Decide if you need shopping for the same, set aside a budget and start saving for the same at least 2 months before the event. When you know you have a cousin’s engagement in the next 3 months, start saving for it and aim to shop for it a month before the event. Last minute shopping will cost you a bomb. There is always a sale going on – make use of it. But remember to buy what’s necessary and stay away from overspending. Your mantra should be - Needs should be addressed and wants should be suppressed!"
                    }, {
                        heading: "Save first and spend later",
                        content: "I know it is easier said than done, but when you get your paycheck, put aside a certain percentage of it in a savings mode of your choice. This has to be the norm, not an option. The savings need not be something extravagant, it could be 5% of your earnings or 50%; it totally depends on you. The idea is to save a percentage of your earnings and then spend with whatever you are left with."
                    },
                    {
                        heading: "Prepare the monthly budget",
                        content: "Always have your monthly budget regularly prepared so you can allocate a reasonable budget for everything. If you want to dedicate 10% of your earnings for groceries, then ensure you don’t go overboard and stock only what is necessary. Same applies to eating out and weekend entertainment expenses. This way, you are aware of your cash limits and will not have the urge to spend lavishly. Self-control is extremely important. Ensure you don’t go overboard and stick to your budget. The bottom line is splurging is fine when it happens once in a while, but when it becomes a routine; it is necessary to control yourself to avoid getting into financial trouble."
                    }
                ]
            }
        }, {

            heading: "Avoid 7 spending mistakes and save more money",
            img: "img/article2.png",
            content: {
                txt: "When it comes to spending, we often lose control on the amount of money that goes from our pocket. In a bid to lead a ‘good life’, we fail to analyze our month-end status. The alluring online sales, our uncontrollable urge to visit the local watering hold, the weekend travel plans with friends, all result in overspending. By the time we realize our mistake, our bank balance is practically zilch. If you want to avoid getting into financial trouble by overspending or rather spending in the wrong places, you need to avoid the following seven mistakes so you can save money.",
                subheading: [{
                        heading: "Reduce online shopping",
                        content: 'We start our online shopping with the necessities, then get too excited with the offers flashing on the sites and end up buying stuff we don’t exactly need. The solution? It is better to visit your local store and buy the product there, to avoid getting lured by online shopping, which almost always ends up in compulsive buying.'
                    },
                    {
                        heading: "Movie matters",
                        content: 'One of the most popular ways to de-stress from our monotonous schedule is going out for movies on weekends. But it is a well-known fact that movie theatres are built to burn a hole in your wallet. It is safe to say that a movie for two will cost you nothing less than thousand bucks. The good way around? Wait for a month or so, all these so called blockbusters have a television premier within a month of release. Or better yet, get a Netflix subscription and watch world-class quality series and movies at home. This way you save money and also have an option to watch something else if you don’t like what you started, without losing your money.'
                    },
                    {
                        heading: "Avoid buying products on EMI",
                        content: 'The idea seems exhilarating, as we get to buy the products by paying a lesser amount initially. However, regular EMIs might get us in a difficult situation when we are in need of money for dire emergencies. EMI’s become an obligation, and you will be forced to pay through your nose. Instead, make it a rule to only buy things that you know you need and not what you fancy or want.'
                    },
                    {
                        heading: "NO to personal loans",
                        content: 'Unless it is a dire emergency, stay away from personal loans. A lot of people take up loans for trivial reasons, thinking that the EMI is ‘manageable’. What they don’t realise is they are just digging a deeper financial grave by getting caught in a circle of debt, which is vicious and never ending. Steer clear of these ‘attractive interest rates’ loans.'
                    },
                    {
                        heading: "Stop using credit cards",
                        content: 'Credit cards can be easily termed as an invitation to financial suicide. Most of us use credit cards for extravagance and luxury and then think of putting the payments on EMI. No need to explain how the vicious circle works. The mantra should be, if you can’t afford to buy something outright without putting it on your credit card, avoid it.'
                    },
                    {
                        heading: "Avoid organizing grand parties",
                        content: 'If you want to make occasions like “first birthday,” “first anniversary,” etc. a mandatory celebration, without burning a hole in your pocket, it is better to have an organized “not so grand” party. Celebrate with immediate family members and close friends who matter rather than having a big crowd in the party halls.'
                    },
                    {
                        heading: "Dining bills",
                        content: 'Take a quick look at your outgoing and you will realise that most of your money gets wasted in eating out. It does not mean that you shouldn’t have a good time, but there should be a limit on how much you want to spend on eating out. Keep a stipulated ‘eating out’ budget each month and the moment you reach it, stay put and cook at home and eat. You decide the budget on your income/expenses but ensure you stick to your eating out budget policy. If you are conscious enough to follow the points mentioned above, overspending will be a thing of the past and saving won’t seem like an uphill task.'
                    },
                    {
                        heading: "",
                        content: ''
                    },
                    {
                        heading: "",
                        content: ''
                    }
                ]
            }

        }, {
            heading: "Tips to live Fabulously and not Broke",
            img: "img/article3.png",
            content: {
                txt: "When we relax on the luxurious bed in a five-star hotel, we get the feeling of owning the place. When we experience the best customer service in a world-class restaurant, we feel out of the world. But once we get back to the real world, it feels like the bubble just burst. Lavishness can make you feel on top of the world, but the fact is it will put a dent on your budget. If you are a middle class person, a luxurious life will only push you on the threshold of loans and financial troubles, which will end up leaving you broke. But lets not mistake lavishness for fabulousness. You don’t have to splurge to live a fabulous life. Here are a few tips to live a fabulous lifestyle without worrying about burning a whole in our pockets.",
                subheading: [{
                        heading: "Positive aura in the house",
                        content: 'We feel awesome when we are happy with the place we live in. You don’t need a penthouse to lead a luxurious life. Create a positive aura in your home. Keep your house clean, get air cleaning indoor plants, decorate the interiors of your house with recycled products, and ensure fresh air circulates in your house by keeping the windows open early morning. These simple methods will give positive vibrations to you and your house.'
                    },
                    {
                        heading: "Satisfying your taste buds",
                        content: 'Treat your taste buds with the food they crave for once a month. Visit that favorite restaurant of yours, as we all deserve a little pampering. Another good way is to have a potluck at home with friends over the weekend. You get to taste a variety of dishes as well as get to have a good time with friends. Try your hand at cooking a fabulous restaurant-style meal at home with your loved ones. Refer to YouTube videos and try something exotic. This way, you get to spend quality time with your family and also end up saving some extra money, which you can use wisely to invest or even take a holiday.'
                    },
                    {
                        heading: "Get creative",
                        content: 'Instead of shopping for attractive wall decors and hangings, get creative by doodling your kid’s favorite cartoon character on the bedroom wall. Recycle those used coconut shells, broken beads, etc., to make a beautiful decorative ceiling hanging. Make a collage from the last year’s table calendar pictures and convert it into a wall art collage. Use your embroidery skills to make your dull curtains look eye-catching. Unleash your imagination and explore the possibilities.'
                    },
                    {
                        heading: "Go Holidaying",
                        content: 'Instead of planning for an international holiday trip, get on the roads in your local city. Find out the historical places, underrated holiday spots, etc., in your city. Go on a road trip, meet new people, visit those monuments, try the staple eateries, get lost in nature and feel fabulously refreshing.'
                    },
                    {
                        heading: "Don’t get obsessed with labels",
                        content: 'You don’t need those fancy labels you see in the big hoardings and TV advertisements to look graceful. Play smart and get quality products at lower costs. Do street shopping and make the best out of it. Display your bargaining skills at places like Sarojini market - Delhi FC road – Pune, Commercial Street – Bangalore, Pondy Bazaar - Chennai; Colaba Causeway - Mumbai or your local shopping hub. Lead a life of luxury and feel fabulous without getting broke. Comfort doesn’t always need money. Fabulous doesn’t always need you to splurge. Do thing that make you happy without spending a whole lot of money – you are already leading a fabulous life.'
                    }
                ]
            }

        }, {
            heading: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: "8 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        },
        {
            heading: " 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "img/article1.png",
            content: {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias,",
                subheading: [{
                    heading: "Lorem ipsum dolor sit amet, consectetur",
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus faciasLorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ita est, vide ne facinus facias'
                }]
            }
        }
    ];
    $scope.length = $scope.articlelist.length;
    $scope.current = 0;
    $scope.toshow = 4;

    $scope.articlemovedown = function () {
        if ($scope.current > ($scope.toshow - $scope.length)) {
            $scope.current = $scope.current - 1;

        } else {
            $scope.current = 0
        }
        $(".article .article_list ul li").css('transform', 'translateY(' + 100 * $scope.current + '%)');
        console.log($scope.current)


    }
    $scope.articlemoveup = function () {
        if ($scope.current < 0) {
            $scope.current = $scope.current + 1;
        } else {
            $scope.current = $scope.toshow - $scope.length;
        }


        $(".article .article_list ul li").css('transform', 'translateY(' + 100 * $scope.current + '%)');
        console.log($scope.current)
    }


    // select article
    $scope.selectArticle = function (x) {
        console.log("inside article select")
        $scope.selectedContent = x;
    }

})