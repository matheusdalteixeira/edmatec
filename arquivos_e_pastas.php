<?php

	function arquivos_e_pastas($p){
		// echo PHP_EOL."Função arquivos_dir";

	    global $v_vars, $t_vars;

	    $v_vars = [$p];

	    $t_vars = ["string"];

		if(valida_seq_tipo($v_vars,$t_vars)){

			$diretorio = dir($p);

			$arquivos = [];

			while($arquivo = $diretorio -> read())

				if(

					$arquivo != "."	&&

					$arquivo != ".."
				)

					$arquivos[count($arquivos)] = $arquivo;

			return $arquivos;

		}

		else

			return false;

	}

?>
