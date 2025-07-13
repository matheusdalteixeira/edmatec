<?php

	function input_term($p1,$p2){

		if(isset($p2)){
			
			$a = -1;
			
			do $temp = readline(PHP_EOL.$p1) while($temp > $p2 || $temp < 0);

			return $temp;
			
		}

		else

			readline(PHP_EOL.$p1)

	}

?>
