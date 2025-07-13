<?php

	function monta_estrutura_sistema($p){

	    global $v_vars, $t_vars;

	    $v_vars = [$p];

	    $t_vars = ["integer"];

		if(valida_seq_tipo($v_vars, $t_vars)){

			if($p == 1){

				mkdir()

				return true;

			}
			if($p == 2){

				return true;

			}

			return false;

		}

		else

			return false;

	}

?>