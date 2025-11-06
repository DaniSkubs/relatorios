document.addEventListener('DOMContentLoaded', () => {
    const gerarBtn = document.getElementById('gerarRelatorioBtn');
    const imprimirBtn = document.getElementById('imprimirRelatorioBtn');
    const relatorioPronto = document.getElementById('relatorio-pronto');
    const fieldsetRelatoFinal = document.getElementById('fieldset_relato_final');

    // Função para calcular a porcentagem
    function calcularPorcentagem(respondentes, total) {
        // Garante que os inputs são tratados como números
        const resp = parseInt(respondentes);
        const tot = parseInt(total);
        if (tot > 0) {
            return Math.round((resp / tot) * 100);
        }
        return 0;
    }

    // Função para converter texto (item por linha) em uma lista HTML <ul><li>
    function arrayToListHTML(text) {
        if (!text) return '<ul><li>Nenhum item registrado.</li></ul>';
        // Divide por quebra de linha e filtra itens vazios
        const items = text.split('\n').filter(item => item.trim() !== '');
        if (items.length === 0) return '<ul><li>Nenhum item registrado.</li></ul>';
        
        return '<ul>' + items.map(item => `<li>${item.trim()}</li>`).join('') + '</ul>';
    }


    // Função principal para montar o relatório
    gerarBtn.addEventListener('click', function() {
        // --- 1. CAPTURA DOS DADOS VARIÁVEIS ---
        const avaliacaoPeriodo = document.getElementById('avaliacao-periodo').value;
        const cursoNome = document.getElementById('curso-nome').value;
        const coordenadora = document.getElementById('coordenadora').value;
        
        // Seção 1: Ingressante
        const ingressantesDataPesquisa = document.getElementById('ingressantes-data-pesquisa').value;
        const ingressantesTotal = document.getElementById('ingressantes-total').value;
        const ingressantesResponderam = document.getElementById('ingressantes-responderam').value;
        const ingressantesParticipacao = calcularPorcentagem(ingressantesResponderam, ingressantesTotal);

        const perfilFaixaGenero = document.getElementById('perfil-faixa-genero').value;
        const perfilRenda = document.getElementById('perfil-renda').value;
        const perfilTrabalho = document.getElementById('perfil-trabalho').value;

        // Seção 2: Avaliação Geral
        const avaliacaoDataPesquisa = document.getElementById('avaliacao-data-pesquisa').value;
        const alunosTotal = document.getElementById('alunos-total').value;
        const alunosResponderam = document.getElementById('alunos-responderam').value;
        const alunosParticipacao = calcularPorcentagem(alunosResponderam, alunosTotal);
        
        const professoresProblema = document.getElementById('professores-problema').value;
        const avaliacaoCoordenacao = document.getElementById('avaliacao-coordenacao').value;

        // Seção 3: Listas
        const listaPotencialidades = document.getElementById('lista-potencialidades').value;
        const listaFragilidades = document.getElementById('lista-fragilidades').value;

        // Finalização
        const dataFinal = document.getElementById('data-final').value;
        

        // --- 2. MONTAGEM DO HTML COM O TEXTO FIXO E VARIÁVEL (Formato do seu Relatório) ---
        const relatorioHTML = `
            <div class="tabela-cabecalho">
                <table>
                    <tr><td>Avaliação:</td><td>**${avaliacaoPeriodo}**</td></tr>
                    <tr><td>Curso:</td><td>**${cursoNome}**</td></tr>
                    <tr><td>Coordenadora:</td><td>**${coordenadora}**</td></tr>
                </table>
            </div>
            
            <br>
            <h1>RELATÓRIO PARCIAL E INGRESSANTES ${avaliacaoPeriodo.split('/')[0]}</h1>
            
            <section class="secao-relatorio">
                <h2>1. Avaliação Institucional do perfil do ingressante</h2>
                <p>O processo de avaliação institucional se deu através de um questionário socioeconômico, denominado de o “Perfil do Ingressante”.</p>
                <p>O mesmo foi respondido eletronicamente por meio do “aluno online” no sistema Lyceum, no período de **${ingressantesDataPesquisa}**.</p>
                <p>O questionário contou com 36 questões que foram analisadas neste relatório nos textos a seguir, aprovados pelo NDE e disponibilizados ao colegiado.</p>
                <p>Neste semestre **${ingressantesTotal} alunos ingressaram** no curso. Destes, **${ingressantesResponderam} responderam ao questionário**, totalizando **${ingressantesParticipacao}% de participação** na pesquisa.</p>
            </section>

            <section class="secao-relatorio">
                <h2>1.2. Síntese do perfil do ingressante</h2>
                <p>Por meio dos resultados obtidos, foi possível identificar o perfil do ingressante do curso de Arquitetura e Urbanismo, como segue:</p>
                <p>Os ingressantes do curso são, **${perfilFaixaGenero}**. O(a) ingressante é em maioria solteiro(a) (100%), que reside em maioria (70%) com 2 a 3 pessoas da família, com renda familiar acima **${perfilRenda}**.</p>
                <p>**${perfilTrabalho}** A maioria recebe auxílio financeiro da família, sendo que os pais e mães, em maioria, têm ensino médio completo. A maioria dos alunos cursou o ensino médio tradicional em escolas públicas (59%). 34% dos alunos cursou ensino profissionalizante. Como meio de transporte para ir à faculdade, destaca-se que grande parte dos alunos utiliza o transporte público e outra parte expressiva declarou usar carro ou outros. Apenas 15% dos alunos declarou não ter lido nenhum livro recentemente e 66% dedicam de uma a duas horas de estudo por semana. 100% dos alunos declaram usar a internet, sendo que 50% usa para bate papo ou redes sociais. Já para o lazer, a maioria declara gostar de ir ao cinema. Dentre os alunos, 38% declaram que dominam o inglês. Dentre os alunos que trabalham, para a maioria, a escolha pelo curso se deu em função do grau de relevância e similaridade ao seu atual emprego (66%). Grande parte enfatizou a escolha da Instituição em função da qualidade do ensino, independente de valores, o que é importante em um contexto de curso com valores altos no mercado, como a Arquitetura e Urbanismo. Os ingressantes estão escolhendo a Instituição por indicação de amigos. É importante destacar que, a maior parte dos alunos ficou sabendo do vestibular do Anchieta via site institucional, o que valoriza nossa comunicação, que atinge a maioria dos ingressantes, uma vez que grande parte deles tem como seu meio de comunicação mais expressivo a internet, acessada frequentemente, conforme declarado pela maioria. Além disso, grande parte ficou sabendo por indicação de amigos, o que demonstra a valorização da IES. Os ingressantes apontam em sua maioria que os docentes apresentaram o plano de ensino adequadamente e que estes continham os itens obrigatórios, além de declarar que os professores demonstram domínio sobre o conteúdo das disciplinas e, que citam artigos científicos e textos especializados com frequência. Além disso, eles afirmam que o professor em geral indica material próprio, o que reforça a ideia de compartilhamento de materiais de aula e materiais de produção autoral dos docentes. Um ponto importante a se destacar é que, a grande maioria dos discentes responderam que as salas de aula são adequadas à quantidade de estudantes e contam com os recursos tecnológicos amplos e adequados. Acerca do oferecimento de atividades complementares, programas de iniciação científica, monitoria, programas de extensão e participação em eventos, a grande maioria afirmou conhecer os programas, com melhora em relação ao semestre anterior, em função da ampla divulgação para os ingressantes pela gestão do curso. Os alunos avaliaram ainda, que o nível de exigência do curso corresponde a carga horária de aulas e conteúdo, sendo exigido na medida. Poucos alunos comentam que o curso pode exigir mais. Sobre os meios de custeio do curso, a maioria dos alunos apontaram o próprio salário como principal forma para pagamento das despesas e afirmaram que o curso apoia financeiramente a participação de estudantes em eventos. Vale ressaltar que grande parte dos alunos contam com o salário dos pais para o pagamento do curso.</p>
            </section>
            
            <section class="secao-relatorio">
                <h2>1.3. Conclusões do perfil do ingressante</h2>
                <p>Em geral, o perfil é de um aluno interessado e envolvido com o curso escolhido, atento às atividades oferecidas pela instituição, conectado e que valoriza a qualidade que o curso oferece. Vale ressaltar que os alunos estão usando muito o seu tempo livre com redes sociais e bate-papos, podendo focar melhor em atividades voltadas para o curso. A coordenação ressalta que um grupo de whatsapp foi criado em 2021-1, para disseminação de informações entre esta e todos os alunos do curso, a fim de ampliar a comunicação, para que os eventos, atividades e comunicações em geral, cheguem de forma mais clara e direta, ampliando a proximidade entre discentes e coordenadora. O grupo já surte bastante efeito sobre o nível de informação dos alunos sobre o curso, inclusive ingressantes. Além disso, o curso conta com um programa próprio de apadrinhamento de alunos novos por veteranos, que ajuda na disseminação de informações entre eles.</p>
            </section>

            <section class="secao-relatorio">
                <h2>2. Avaliação institucional</h2>
                <p>Este relatório apresenta os aspectos mais relevantes dos resultados da avaliação institucional desenvolvida e aplicada pela CPA.</p>
                <p>O mesmo foi respondido eletronicamente por meio do “aluno online” no sistema Lyceum, no período de **${avaliacaoDataPesquisa}**.</p>
                <p>São descritas considerações específicas ao curso de forma sucinta e objetiva e assim, não apresenta descrições comuns a outros cursos, como o método de aplicação dos questionários e cômputo dos dados. A coordenação do curso de Arquitetura e Urbanismo é quem analisa e sintetiza as informações da avaliação institucional, que posteriormente é informada ao NDE e ao colegiado do curso.</p>
                <p>Neste semestre o curso conta com **${alunosTotal} alunos** e, destes, **${alunosResponderam} responderam ao questionário**, totalizando **${alunosParticipacao}% de participação** na pesquisa.</p>
                <p>Entre os docentes, 100% desses responderam o questionário.</p>

                <h3>2.1. AUTOAVALIAÇÃO DISCENTE</h3>
                <p>Os alunos se avaliam em maioria como excelentes ou bons em pontualidade. Se avaliam ainda com excelente e boa participação e interesse no curso. Já na colaboração ao processo de ensino-aprendizagem, a maioria se considera excelente ou bom, mas 30% declaram regular, o que chama a atenção. 30% se avaliam como regulares ou ruins no acompanhamento do diário eletrônico, porém, o curso fornece os cronogramas de aula, com atividades e avaliações já detalhadas por data, facilitando a compreensão dos alunos. Os representantes trazem ótimos retornos quanto à essa prática do curso. Já com os funcionários, colegas e docentes a relação é considerada excelente ou boa em grande maioria. Consideram seu desempenho geral como aluno como bom. Sobre as aulas remotas, 55% assiste de forma síncrona e 35% de acordo com sua agenda, 10% assistem sempre depois a gravação. 29% dos alunos afirmam ter problemas com as aulas remotas em função da instabilidade da conexão da internet e 31% em função de mudanças no horário de trabalho, o que é um ponto de atenção, já que os alunos deveriam ter os horários de aula exclusivos para o estudo. A maioria declara boa ou excelente participação nos eventos promovidos pela IES.</p>
                
                <h3>2.2. AUTOAVALIAÇÃO DOCENTE</h3>
                <p>Da autoavaliação docente, 11 professores responderam (100%). Nenhum dos professores cita ter dificuldades com as Tecnologias de Comunicação e Informação (TICs). 73% citam sua participação na construção do PCC do curso como excelente ou boa e o restante declara não se aplicar, em muito porque são aderentes de outros cursos, ministrando disciplinas pontuais na Arquitetura e Urbanismo. Avaliam-se em totalidade como excelentes ou bons em pontualidade, metodologia, participação nas atividades do curso com ideias e sugestões e demandas da coordenação. 27% dos docentes avaliam sua produção científica como regular na área de atuação do curso, lembrando que temos perfis intercursos, como docentes de engenharia, pedagogia, que são muito ricos para a diversidade do curso.</p>
                
                <h3>2.3. DOCENTE AVALIANDO TURMA</h3>
                <p>A professora Viviane avaliou uma turma como parcialmente satisfatória na dimensão atitudinal: competências voltadas aos valores, atitudes, iniciativas, normas, comportamentos, responsabilidades, interação. De fato, a turma e a professora, tiveram algumas questões ao longo do semestre, que foram conversadas, mediadas e minimizadas. O professor Renan avaliou uma turma como parcialmente satisfatório na dimensão procedimental: competências voltadas à participação, compartilhamento, operacionalizações, execuções e no comprometimento com a realização dos instrumentos avaliativos. Além disso, ele avaliou duas turmas na dimensão conceitual: competências voltadas à relação com letramento textual, pensamento crítico, símbolos, imagens, representações, como parcialmente satisfatório. Em geral e grande maioria, as avaliações nos quesitos são de satisfatório, com turmas precisando pontualmente de atenção em alguns quesitos específicos. Poucos alunos comentam que o curso pode exigir mais.</p>

                <h3>2.4. DISCENTE AVALIANDO DOCENTE</h3>
                <p>Em uma análise global pôde-se verificar que a maior parte dos alunos avalia os docentes, quanto aos quesitos abordados, como bons ou excelentes. **${professoresProblema}** Os professores das disciplinas EAD receberam avaliações regulares, o que mostra a dificuldade do contato dos alunos, mas nenhum recebeu ruim em mais de 15%. A grande maioria das avaliações são de excelente e ótimo, porém, houve um crescente de avaliações como regular. A coordenação analisa que existe um movimento dos alunos para avaliar de forma mais consciente, como solicitado em algumas reuniões, o que mostra um resultado mais coerente com algumas reclamações que são trazidas pelos representantes, mas pontuais, o que não muda o fato de que o corpo docente segue sendo avaliado como primoroso. A Coordenação do curso analisou os resultados analíticos do processo de avaliação institucional e buscará abordar os resultados gerais nas reuniões de colegiado, além de buscar abordar alguns casos de forma individualizada, a fim de que eventuais pontos negativos possam ser corrigidos e para propiciar aprimoramento contínuo.</p>
                
                <h3>2.5. DOCENTE AVALIANDO COORDENAÇÃO</h3>
                <p>Quanto à atuação do coordenador avaliada pelos docentes foi possível avaliar que os docentes se sentem incentivados a participar da construção do PPC e que recebem informações adequadas sobre o PDI. Avaliam ainda, em maioria, a gestão do curso, a disponibilidade da coordenação, o incentivo à pesquisa e o suporte às aulas remotas como excelentes. Avaliaram no primeiro semestre como excelentes os quesitos da condução e realização de reuniões pedagógicas, a motivação para engajamento à extensão e o acompanhamento ao trabalho docente. No total, **${avaliacaoCoordenacao}**, o que mostra o resultado da gestão horizontal praticada no curso e de apoio aos docentes.</p>

            </section>

            <section class="secao-relatorio">
                <h2>3. POTENCIALIDADES E FRAGILIDADES</h2>
                <p>Após análise dos resultados da Avaliação Institucional de forma abrangente, pode-se constatar diversas **potencialidades**, tais como:</p>
                ${arrayToListHTML(listaPotencialidades)}
                <p>Dentre as **fragilidades** encontradas a partir dos resultados da Avaliação Institucional **${listaFragilidades}**.</p>
                
                <h3>FORMAS DE DIVULGAÇÃO DOS RESULTADOS PARA OS ENVOLVIDOS E PARA O CORPO SOCIAL</h3>
                <p>As informações aqui obtidas serão divulgadas aos interessados da seguinte forma:</p>
                <ul>
                    <li>via e-mail para docentes e diretoria;</li>
                    <li>oralmente em reuniões focais da coordenação com os docentes;</li>
                    <li>oralmente em reuniões com os representantes discentes para debate de resultados;</li>
                    <li>através de informativos no grupo do curso, para todos os alunos.</li>
                </ul>
            </section>

            <section class="secao-relatorio">
                <h2>CONSIDERAÇÕES FINAIS</h2>
                <p>O processo de Avaliação Institucional é de extrema valia para a obtenção de resultados específicos e pontuais que podem ser trabalhados para melhoria contínua do curso, além de nortear ações preventivas ou corretivas. De modo geral, a avaliação mostrou de forma clara que o curso transcorre com excelência, tanto sob a ótica dos docentes quanto a dos discentes, além da coordenação.</p>
            </section>

            <div class="assinatura-final">
                <p>**${dataFinal}.**</p>
                <br><br><br>
                <p>---------------------------------------------------------------</p>
                <p>Prof.ª Ma. Danielle Skubs</p>
                <p>Coordenadora do curso de **${cursoNome}**</p>
            </div>
        `;

        // 3. Injeta o HTML formatado na área de visualização
        relatorioPronto.innerHTML = relatorioHTML;
        
        // 4. Mostra o fieldset final (incluindo o botão de imprimir)
        fieldsetRelatoFinal.style.display = 'block';
    });

    // Adiciona a funcionalidade de imprimir
    imprimirBtn.addEventListener('click', function() {
        window.print();
    });
});
