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
	
    $('button.update').click(function(){
		document.getElementById('myText').innerHTML = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
	});
	

});