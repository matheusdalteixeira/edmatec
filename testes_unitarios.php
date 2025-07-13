<?php

	function testes_unitarios(){

		global $cor_texto;
		global $cor_reset;
		global $nomes_arq_includes;
		global $dados_arq_includes;

		// etapa 1: exibição de dados lidos de sevidor externo

		$a = -1;

		while(isset($nomes_arq_includes[++$a])){

			$ch = PHP_EOL.PHP_EOL;
			$ch .= $cor_texto["light_red"];
			$ch .= $nomes_arq_includes[$a];
			$ch .= $cor_reset;
			$ch .= PHP_EOL.PHP_EOL;
			$ch .= $dados_arq_includes[$a];

			echo $ch;

		}
	}

?>