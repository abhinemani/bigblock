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
            alert("The given text is too short to analyze. Please try it again.");
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
		var muniLength = muniCount * 7.25;
		console.log(muniCount);
		console.log(muniLength);
		document.getElementById('yourmuni').innerHTML = '<path d="M 0 0 h ' + muniLength + '" fill="none" stroke="#990000" stroke-width="1"></path><g transform="translate(' + muniLength + ' 0)"><circle cx="0" cy="0" r="2" fill="#990000"></circle><text x="5" y="0" dominant-baseline="middle" font-size="4.5">You (' + muniCount + '/7)</text></g>';
	});
	
	
    $('button.update').click(function(){
		document.getElementById('myText').innerHTML = "As the largest and most vibrant city in the state, Minneapolis depends on purposeful, dedicated and innovative employees. Minneapolis has a large variety of careers for people of all experiences and backgrounds who come together for a singular purpose—serving the residents, businesses and visitors of Minneapolis. This position is responsible to accurately communicate public safety information of an emergency nature, in a timely fashion on behalf of the City of Minneapolis and serve as the City’s lead PIO for the Office of Community Safety (911, Emergency Management, Fire, Neighborhood Safety, and Police). This position directs media relations related to public safety incidents and handles sensitive and confidential information, including non-public data. The position works closely internally throughout the City enterprise and with external partner agencies locally, regionally, statewide, and nationally.  The ideal candidate will have ability to navigate multiple agencies in a crisis, journalism experience, and a track record in managing teams well. Benefits Summary. Our employees enjoy competitive salaries and generous benefits. We pride ourselves on a comprehensive benefits program that supports employees' health and financial well-being. Programs, resources, and benefit eligibility varies based on position, average hours worked, location and length of service. For detailed benefits information, please visit the benefits page.  New 12 weeks of paid Parental Leave. City employees are eligible for up to 12 weeks of paid parental leave in the event of a birth or placement for adoption of a child. Insurance. Health insurance. Eligibility for benefits begins the first of the month following employment date. The City of Minneapolis offers eligible employees one plan design with a choice of six provider networks, allowing you to select the best option for you.  The City of Minneapolis offers dental insurance through Delta Dental of Minnesota and pays 100% of the monthly premium for eligible employees. Paid time off. Our generous leave package includes vacation, holidays and paid sick leave, which gives employees the opportunity to enhance their quality of life outside work. Amounts and accrual rates are based on years of experience and collective bargaining agreements. Retirement. City employees earn a pension and may choose to participate in additional retirement savings programs. Transportation. Eligible City employees may choose to participate in the following transportation programs.  To engage and develop employees, the City of Minneapolis offers classes in leadership, cultural agility, change management and more. Additionally, educational discounts at Augsburg University, Hamline University and St. Mary's University of Minnesota are available to City employees. Employees can also take advantage of optional life insurance, flexible spending accounts, the Employee Assistance Program (Download PDF reader), technology discounts and more. ";
	});
	

});