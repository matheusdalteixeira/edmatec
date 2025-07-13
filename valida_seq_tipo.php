<?php

	function valida_seq_tipo($p1, $p2){

		$a = -1;

		while (isset($p1[++$a]) && isset($p2[$a]))
			if (gettype($p1[$a]) != $p2[$a])
				return false;

		return true;

	}

?>