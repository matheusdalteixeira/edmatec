<?php

	function rep_add_arr($p1, $p2, $p3){

	    global $v_vars, $t_vars;

	    $v_vars = [$p1, $p2, $p3];

	    $t_vars = ["array", "string", "integer"];

		if(valida_seq_tipo($v_vars, $t_vars)){

			$a = -1;

			while(++$a < $p3)

				$p1[$a] = $p2;

			return $p1;

		}

		else

			return false;

	}

?>