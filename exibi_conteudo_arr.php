<?php

	function exibi_conteudo_arr($p){

		global $v_vars, $t_vars;
		
		$v_vars = [$p];
		
		$t_vars = ["array"];

		if(valida_seq_tipo($v_vars, $t_vars)){
		
			$a = -1;
		
			while(isset($p[++$a]))
		
				echo PHP_EOL."[".$a."]".$p[$a];
		
		}
		
		else
		
			return false;

	}

?>
