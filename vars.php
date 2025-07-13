<?php

    $funcoes_menu = [];

    $funcoes_menu[0] = "incluir questão";   //  pronta

    $funcoes_menu[1] = "excluir questão";   //  implementar

    $funcoes_menu[2] = "incluir assunto";   //  implementar

    $funcoes_menu[3] = "excluir assunto";   //  implementar

    $funcoes_menu[4] = "pesquisar";         //  implementar

    $funcoes_menu[5] = "simular prova";     //  implementar

    $funcoes_menu[6] = "apagar variáveis";  //  implementar

    $funcoes_menu[7] = "estatisticas";      //  implementar

    $total_fun_menu = (string) count($funcoes_menu);


    $tela = [];

    $tela["limpeza"] = "\033[2J\033[1;1H";

    $cont_tempo = 0;


    $path = getcwd();

    $pasta_atual = "";

    $pastas_abertas = [];

    $v_vars = [];

    $t_vars = [];


    $cor_reset = "\033[0m";

    $cor_texto = array();


    $cor_texto['black']      = "\033[0;30m";

    $cor_texto['dark_gray']    = "\033[1;30m";

    $cor_texto['blue']       = "\033[0;34m";

    $cor_texto['green']      = "\033[0;32m";

    $cor_texto['light_green']   = "\033[1;32m";

    $cor_texto['cyan']       = "\033[0;36m";

    $cor_texto['light_cyan']    = "\033[1;36m";

    $cor_texto['light_red']    = "\033[1;31m";

    $cor_texto['brown']      = "\033[0;33m";

    $cor_texto['yellow']      = "\033[1;33m";

    $cor_texto['light_gray']    = "\033[0;37m";

    $cor_texto['white']      = "\033[1;37m";


    $cor_bg = array();

    $cor_bg['black']        = "\033[40m";

    $cor_bg['red']         = "\033[41m";

    $cor_bg['green']        = "\033[42m";

    $cor_bg['yellow']       = "\033[43m";

    $cor_bg['blue']        = "\033[44m";

    $cor_bg['magenta']       = "\033[45m";

    $cor_bg['cyan']        = "\033[46m";

    $cor_bg['light_gray']     = "\033[47m";

?>
