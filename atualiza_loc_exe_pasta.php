<?php

	function atualiza_loc_exe_pasta($p1, $p2){

	    global $v_vars, $t_vars;

	    $v_vars = [$p1, $p2];

	    $t_vars = ["integer", "string"];

		if(valida_seq_tipo($v_vars, $t_vars)){

			global $pasta_abertas; // array

			global $pasta_atual; // string

			if ($p1 > 0) {

				// avançar indice de pastas abertas...

				$pasta_atual = $p2;

				array_push($pastas_abertas, $p2);

			}

			else{

				// retrocede indice de pastas abertas...

				array_pop($pastas_abertas);

				$pasta_atual = $pastas_abertas[count($pastas_abertas) - 1];

			}

		}

		else

			return false;

	}

?>