(function () {

	var x=prompt('Score: ');

	if(!x||x>7||x<1) {
		alert('Invalid Score!');
		return;
	}

	else {

		x--;

		var el = [];
		var rs = [];

		function filter(argument) {
			return argument.type=='radio'
		}

		var divs=document.getElementsByClassName('takeQuestionDiv');

		if(!divs || divs.length != 16) {
			alert('Error fetching questions!');
			return;
		}

		for(var i=divs.length-1; i>=0; i--) {
			el.push(divs[i].getElementsByTagName('*'));
		}

		for(var i=el.length-1; i>=0;	i--) {
			for(var j=el[i].length-1; j>=0; j--) {
				if(filter(el[i][j]))
					rs.push(el[i][j]);
			}
		}

		if(!rs.length) {
			alert('Error fetching radios!');
			return;
		}
		
		var rv = grv(divs.length, x * divs.length, 6);
		var cval = rv.pop();

		for(var i=rs.length-1; i>=0; i--) {
			if(rs[i].value==cval) {
				rs[i].checked=true;
				
				i = (Math.floor(i/7)*7)-1;

				cval = rv.pop();

			}
		}
	}

	function grv(nr, t, top) {

		var rv = [];

		for (var i = 0; i < nr; i++) {
			rv.push(0);
		}

		while (t) {
			var pos = Math.floor(Math.random() * nr);
			if(rv[pos] < top) {
				rv[pos]++;
				t--;
			}
		}
		return rv;
	}
})()
