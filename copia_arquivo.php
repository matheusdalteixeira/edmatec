<?php
	
	function copia_arquivo($p1,$p2){

	    global $v_vars, $t_vars;

	    $v_vars = [$p1,$p2];

	    $t_vars = ["array","string"];

		if(valida_seq_tipo($v_vars, $t_vars)){

			if(file_exists($p1[0]."/".$p2)){

				if(
				
					!copy(
				
						$p1[0]."/".$p2,

						$p1[1]."/".$p2
				
					)
				
				)

					echo PHP_EOL."falha ao copiar arquivo";

				

			}

		}

		else

			return false;

	}

?>