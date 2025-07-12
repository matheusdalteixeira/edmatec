<?php

	function arquivos_e_pastas($p){
		// echo PHP_EOL."Função arquivos_dir";

	    global $v_vars, $t_vars;

	    $v_vars = [];

	    $t_vars = [];

		if(valida_seq_tipo([$p],["string"])){

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
