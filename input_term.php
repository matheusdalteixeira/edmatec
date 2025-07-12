<?php

	function input_term($p1,$p2){

	    global $v_vars, $t_vars;

	    $v_vars = [$p1,$p2];

	    $t_vars = ["string","array"];

		if(valida_seq_tipo($v_vars, $t_vars)){

			if($p2[0]){}

			else

				return readline(PHP_EOL.$p1);

		}

		else

			return false;

	}

?>