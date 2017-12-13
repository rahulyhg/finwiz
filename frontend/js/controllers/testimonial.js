myApp.controller('TestimonialCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/testimonial.html");
    TemplateService.title = "Testimonial"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    NavigationService.apiCallWithoutData("Testimonials/getAllTestimonials",function(data){
        $scope.testData=data.data;
    })
    // $scope.testData=[{
    //     description: "The concept of financially educating young professionals is quite good. The advice given by experts during the show helped our employees understand some of the concepts and terminologies in a layman’s language. The day to day examples given by experts along with clarifying some of the myths/notions that we have when it comes to investing helped employees relook at the investment tools from a different perspective all together. All in all, it was a great initiative and we thank CNBC TV 18 team and NSE for extending this opportunity to us. Look forward to many such initiatives in times to come.",
    //     name: "Smritee Chaturvedi",
    //     designation:"Marketing & Communications, GSK"
    // }, {  
    //      description: "Thank you for organizing a very informative and a wonderful programme at our Hinjewadi campus. We had almost around 175 participants and the feedback received from them for the programme has been very good. We look forward for more of such association with your team.",
    //      name: "Swetha Shivakumar",
    //      designation:"HR-OPS, Tech Mahindra"
    // }, {  
    //      description: "Thanks for having BOSCH on Fin Wiz.Overall the program was good. The new associates found it useful – especially the fresher’s who had not given the topic any thought and found it educative.",
    //     name: "Deena Jacob",
    //      designation:"Corporate Communications"
    // }, {  
    //      description: "Participating in NSE Fin Wiz was a great experience. Industry experts Deepak & Feroze gave some amazing insights about planning our investments. One of the most important take away from the session was about Term Life Insurance. Several myths about Gold and Real Estate were also busted during the session, which will definitely help working professionals in taking the right investment decision.I would recommend this series to every novice investor. You will not only get good investment tips, but also get a better understanding on the various financial tools available in the market.",
    //     name: "Anjana Chandran",
    //      designation:"Head PR & Corp Comm., Manipal Hospitals"
    // }, {  
    //      description: "FinWiz created a lot of buzz among Uninor employees. Though the concepts discussed were very high level, it helped in breaking the myths and scare around investment. For many it was first time they were interacting with investment advisors and it was a satisfying experience for them. The interactive format of the programme helped the employees see beyond their regular investments instrument. The expert talk gave a visibility of the new investment avenues.  Employees have immensely benefitted from the advise and showed keen interest in understanding ways to plan a secure future for their children as well as take a long-term view on retirement planning. ",
    //     name: "Anurag Prasad – General Manager",
    //      designation:"Corp Comm, Uninor"
    // }, {  
    //      description: "A BIG Thank You from L&T Infotech.I received a lot of appreciation from the audience present. The show was excellent and well anchored.The panelist were the best from the industry and they really reached out to most of the queries in best simplified way",
    //     name: "Neelian Homem",
    //      designation:"PR & Media Relations – India, L&T Infotech"
    // }, {  
    //      description: "We at Exide Industries are glad that we were chosen to be part of NSE FinWiz .I must congratulate both NSE and CNBC_TV  for conceptualizing a show like this , with an aim of  improving  financial literacy and educating the retail investors especially the salaried youth to make informed investment decisions .CNBC-TV18 has already covered our employees in the East at our Haldia factory and South at our Hosur factory. The verdict is unanimous, all were delighted to be part of the programme . Both the sessions have been extremely informative, and provided good conceptual clarity of various asset classes and the associated risks. I felt it was a great forum where our employees could get answers from the experts in the financial arena using simple day to day examples. To sum it up it was an enriching experience for our employees.",
    //     name: "M B V Rau",
    //      designation:"General Manager - HR,Exide Industries Limited"
    // }, {  
    //      description: "The session was indeed very insightful. It generated new knowledge on the financial literacy needs and how to meet these needs effectively. Most importantly gave the employees an overall view of wealth management, to relook at investments, tax planning, debt management, and property management etc.",
    //     name: "Aparna Tekuri",
    //      designation:"Manager, Corporate Communications, Dr. Reddy’s"
    // }]
})