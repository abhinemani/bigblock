$(document).ready(function(){

    $('button.count').click(function(){
		
	    $('.hidden').hide();
		
        
        var text = $('#myText').val();
		

		
		
        var words2 = text.split(" ");
		
		var words = words2.filter((element) => {
		  return element.length > 3;
		});
      
        var lastWord = words[words.length-1];
        
        if(lastWord==""){
            words.pop();
        }
        
        for (var i=0; i<words.length; i++) {

           if(/^[a-zA-Z0-9_-]*$/.test(words[i]) == false) {
               words[i] = words[i].slice(0,-1);
           }
        };

       
        var analyse = [];

        $.each(words, function(i,el){
            analyse[el] = analyse[el] + 1 || 1;
        });

        var wordsOrder = [];
        for (var key in analyse) wordsOrder.push([key, analyse[key]]);
        
        wordsOrder.sort(function(a,b){
            return  b[1]-a[1];
        })
    
        var diffWordsCount = wordsOrder.length;  
        
        if(diffWordsCount < 4) {
            alert("The given text is too short to analyze. Please use at least 10 words.");
            window.location.reload();
            
        } else { 
            
			$('#wordletitle').html('General (Inductive) Outcomes')
            $('#generalResult').html(`Your text has <strong>${words.length} words</strong> and <strong>${text.length} characters</strong>.`);
            $('#results').html(`The text is written with <strong>${diffWordsCount} different words</strong> and the most used word is <strong>${wordsOrder[0][0]}</strong>.`);

            
            $('.hidden').show();

            var shareofOneWord = Math.floor((wordsOrder[0][1]/diffWordsCount)*100);
            var shareofTwoWord = Math.floor((wordsOrder[1][1]/diffWordsCount)*100);
            var shareofThreeWord = Math.floor((wordsOrder[2][1]/diffWordsCount)*100);
            var shareofFourWord = Math.floor((wordsOrder[3][1]/diffWordsCount)*100);
            var shareofOthers = 100 - (shareofOneWord+shareofTwoWord+shareofThreeWord+shareofFourWord);
           
           // charts

            var ctx = $('#myChart')[0].getContext('2d');

            var wordChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [wordsOrder[0][0],wordsOrder[1][0],wordsOrder[2][0],wordsOrder[3][0],"Others"],
                    datasets:[{ 
                        data: [shareofOneWord,shareofTwoWord,shareofThreeWord,shareofFourWord,shareofOthers],
                        backgroundColor: [
                            '#1DC690',
                            '#e66465',
                            '#278AB0',
                            '#1C4670',
                            '#EAEAE0'
                        ]
                    }]
                },
                options: {
                    cutoutPercentage: 0,
                    responsive: true,
                    legend: {
                        display: true
                    }
                }
            });

      }

    });
	
    $('button#freq').click(function(){
		var muniCount = document.getElementsByClassName("green").length;
		var muniLength = muniCount * 9;
		console.log(muniCount);
		console.log(muniLength);
		document.getElementById('yourmuni').innerHTML = '<path d="M 0 0 h ' + muniLength + '" fill="none" stroke="#89468B" stroke-width="1"></path><g transform="translate(' + muniLength + ' 0)"><circle cx="0" cy="0" r="2" fill="#89468B"></circle><text x="5" y="0" dominant-baseline="middle" font-size="4.5">You (' + muniCount + '/7)</text></g>';
	});
	
	
    $('button.update').click(function(){
		document.getElementById('myText').innerHTML = "Position Description The Director Civil Rights Equity provides management oversight and leadership to the Civil Rights Equity Division (CRED) where the mission is to act as liaison for the Civil Rights Department on equity issues with other City Departments, other organizations and citizens, and to oversee inward facing policy and process concerning equity for the Civil Rights Department.  The position provides leadership and oversight of the function in which this work is done. *This position will remain open until filled. The hiring authority reserves the right to determine the maximum number of candidates to review and interview. Work Location: This position may be eligible for flexible work arrangements, including hybrid work with some days working remotely and some days working in the office. Job Duties and Responsibilities Oversee the day-to-day management of the Civil Rights Department in the absence of other managers or the Director Act for and exercise the powers of the Director when assigned Provide for the administrative and fiscal oversight and management of personnel within the Civil Rights assigned Division so that the programs and policies achieve the mission of the Civil Rights Department Provide guidance and leadership to your direct reports Exercise broad latitude to work independently and use initiative to make decisions for the good of the Department and stakeholders.  Provide strategic guidance and insight to all Divisions regarding issues of equity and systemic discrimination. Navigating and negotiating organizational change in a large, complex organization Conduct research, provide analytics, and reports to the division, other city departments, mayor's office, and external parties to drive decision making. Develop presentations of research, data, and analytics for city departments, mayor's office, and external organizations and partners. Forward facing position to the community. You will work on policies, marketing, and other materials for community members Run the City's urban scholars' program, build relationships with external partners, and drive partnerships Build upon and lead our equity initiatives Serves as the representative of the Director, both internally to department staff and externally to the Mayor, City Council and staff, leadership of other jurisdiction locally and nationally, community and effected stakeholders. Working Conditions: Normal office environment Required Qualifications Minimum Qualifications: MA/MS in Public Administration, Public Policy, Law or equivalent; or Relevant BA with additional equivalent experience Minimum Experience:  Five (5) or more years of experience (Seven (7) years or more with a bachelor's degree) in policy-making, program development, implementation, and management in the areas of Civil or Human Rights, or a related area of specialty. Experience must include three years of administrative, supervisory or management responsibility. Equivalency: An equivalent combination of education and experience closely related to the duties of the position MAY be considered. Required: An updated resume is required to be considered for this position. Background Check: The City has determined that a criminal background check and/or qualifications check may be necessary for certain positions with this job title. Applicants may be required to sign an informed consent form allowing the City to obtain their criminal history and/or verify their qualifications in connection with the position sought. Applicants who do not sign the informed consent form will not be further considered for the position. This position is not represented by a bargaining unit. This is an appointed position.  Interview Selection: The hiring authority reserves the right to determine the maximum number of candidates to review and interview Knowledge, Skills and Abilities Understanding of Civil Rights programs, regulations, and practices and how they are unique in the business area of the department (EEOC, Contract compliance, Police Oversight, and Labor Standards) including familiarity with the legal issues of each. Understanding of the concepts of equity, including experience in applying equity frameworks to established laws, ordinances, and long-standing practices.  Experience navigating and negotiating organizational change in large, complex organizations is required. Knowledge of and experience applying an equity framework in an enforcement environment is highly desirable.  Must have management skills, communication skills (written and oral) ability to work under pressure, time management skills, ability to be flexible, leadership ability, project management and completion skills, as well as an ability to let go mid project. Must be innovative and creative. Must have experience and the ability to work with diverse and vulnerable communities. Must have experience in developing community outreach and engagement strategies. Organizational Positioning Skills Organizational agility; knows how to get things done both formally and informally, including through personal relationships. Understands the key policies and procedures of the org. Politically savvy and can maneuver through complex political situations Excellent presentation and facilitation skills; can change tactics midstream Personal and Interpersonal Skills Interpersonal Savvy: relates well to all kinds of people and builds constructive and effective relationships Ability to manage diversity and understands inclusion Ability to negotiate: Can win concessions without damaging relationships and can be both direct and forceful as well as diplomatic Managing Vision and Purpose: can inspire and motivate people Self-awareness and a desire to learn. Open and vulnerable; ability to admit mistakes; sharing strengths and weaknesses Benefits Summary Our employees enjoy competitive salaries and generous benefits. We pride ourselves on a comprehensive benefits program that supports employees' health and financial well-being. Programs, resources, and benefit eligibility varies based on position, average hours worked, location and length of service. For detailed benefits information, please visit the benefits page.  New 12 weeks of paid Parental Leave. City employees are eligible for up to 12 weeks of paid parental leave in the event of a birth or placement for adoption of a child. Insurance Health insurance Eligibility for benefits begins the first of the month following employment date. The City offers eligible employees one plan design with a choice of six provider networks, allowing you to select the best option for you. Available plans include Medica Choice Passport, Medica Elect, VantagePlus with Medica, Park Nicollet First with Medica, Ridgeview Community Network powered by Medica, and Clear Value with Medica. Dental insurance: The City offers dental insurance through Delta Dental of Minnesota and pays 100% of the monthly premium for eligible employees. Benefits Paid time off: Our generous leave package includes vacation, holidays and paid sick leave, which gives employees the opportunity to enhance their quality of life outside work. Amounts and accrual rates are based on years of experience and collective bargaining agreements. Retirement: City employees earn a pension and may choose to participate in additional retirement savings programs. Pension: The City participates in the Public Employees Retirement Association (PERA). Employees and the City both contribute a percentage of your pay to fund future benefits. Deferred compensation: Employees may choose to participate in pre-tax or after-tax savings plans through the Minnesota State Retirement System (MSRS). Transportation: Eligible City employees may choose to participate in the following transportation programs: Metropass: The Metropass program allows eligible employees to enroll in a pass for unlimited bus or light rail rides at a discounted price. Parking or Van Pool: The City of Transportation Benefits Plan gives you options to pay certain commuting costs--such as qualified parking and van pool expenses--with pre-tax dollars. Learning and development To engage and develop employees, the City offers classes in leadership, cultural agility, change management and more. Additionally, educational discounts at Augsburg University, Hamline University and St. Mary's University of Minnesota are available to City employees. Other perks Employees can also take advantage of optional life insurance, flexible spending accounts, the Employee Assistance Program (Download PDF reader), technology discounts and more.";
	});
});