document.addEventListener('DOMContentLoaded', () => {
    const gerarBtn = document.getElementById('gerarRelatorioBtn');
    const imprimirBtn = document.getElementById('imprimirRelatorioBtn');
    const relatorioPronto = document.getElementById('relatorio-pronto');

    // Função para calcular a porcentagem
    function calcularPorcentagem(respondentes, total) {
        if (total > 0) {
            return Math.round((respondentes / total) * 100);
        }
        return 0;
    }

    // Função principal para montar o relatório
    gerarBtn.addEventListener('click', function() {
        // --- 1. CAPTURA DOS DADOS VARIÁVEIS ---
        const avaliacaoPeriodo = document.getElementById('avaliacao-periodo').value;
        const cursoNome = document.getElementById('curso-nome').value;
        const coordenadora = document.getElementById('coordenadora').value;
        
        const ingressantesTotal = parseInt(document.getElementById('ingressantes-total').value);
        const ingressantesResponderam = parseInt(document.getElementById('ingressantes-responderam').value);
        const ingressantesParticipacao = calcularPorcentagem(ingressantesResponderam, ingressantesTotal);

        const alunosTotal = parseInt(document.getElementById('alunos-total').value);
        const alunosResponderam = parseInt(document.getElementById('alunos-responderam').value);
        const alunosParticipacao = calcularPorcentagem(alunosResponderam, alunosTotal);

        const dataFinal = document.getElementById('data-final').value;

        // --- 2. MONTAGEM DO HTML COM TEXTO FIXO E VARIÁVEL ---
        // OBS: O texto a seguir é uma representação formatada do seu DOCX.
        const relatorioHTML = `
            <div class="tabela-cabecalho">
                <table>
                    <tr>
                        <td>Avaliação:</td>
                        <td>**${avaliacaoPeriodo}**</td>
                    </tr>
                    <tr>
                        <td>Curso:</td>
                        <td>**${cursoNome}**</td>
                    </tr>
                    <tr>
                        <td>Coordenadora:</td>
                        <td>**${coordenadora}**</td>
                    </tr>
                </table>
            </div>
            
            <br>
            <h1>RELATÓRIO PARCIAL E INGRESSANTES ${avaliacaoPeriodo.split('/')[0]}</h1>
            
            <section class="secao-relatorio">
                <h2>1. Avaliação Institucional do perfil do ingressante</h2>
                <p>O processo de avaliação institucional se deu através de um questionário socioeconômico, denominado de o “Perfil do Ingressante”.</p>
                <p>O mesmo foi respondido eletronicamente por meio do “aluno online” no sistema Lyceum, no período de 26/03 a 09/04.</p>
                <p>O questionário contou com 36 questões que foram analisadas neste relatório nos textos a seguir, aprovados pelo NDE e disponibilizados ao colegiado.</p>
                <p>Neste semestre **${ingressantesTotal} alunos ingressaram** no curso. Destes, **${ingressantesResponderam} responderam ao questionário**, totalizando **${ingressantesParticipacao}% de participação** na pesquisa.</p>
            </section>

            <section class="secao-relatorio">
                <h2>1.2. Síntese do perfil do ingressante</h2>
                <p>Por meio dos resultados obtidos, foi possível identificar o perfil do ingressante do curso de Arquitetura e Urbanismo, como segue:</p>
                <p>Os ingressantes do curso são, (66%) da faixa etária entre 17 e 19 anos, maioria de mulheres (77,4%). O(a) ingressante é em maioria solteiro(a) (100%), que reside em maioria (70%) com 2 a 3 pessoas da família, com renda familiar acima entre R$ 3.961,00 e R$ 5.280,00. 40 % dos ingressantes não estão trabalhando, mas 30% trabalham em tempo integral. A maioria recebe auxílio financeiro da família, sendo que os pais e mães, em maioria, têm ensino médio completo. A maioria dos alunos cursou o ensino médio tradicional em escolas públicas (59%). 34% dos alunos cursou ensino profissionalizante. Como meio de transporte para ir à faculdade, destaca-se que grande parte dos alunos utiliza o transporte público e outra parte expressiva declarou usar carro ou outros. Apenas 15% dos alunos declarou não ter lido nenhum livro recentemente e 66% dedicam de uma a duas horas de estudo por semana. 100% dos alunos declaram usar a internet, sendo que 50% usa para bate papo ou redes sociais. Já para o lazer, a maioria declara gostar de ir ao cinema. Dentre os alunos, 38% declaram que dominam o inglês. Dentre os alunos que trabalham, para a maioria, a escolha pelo curso se deu em função do grau de relevância e similaridade ao seu atual emprego (66%). Grande parte enfatizou a escolha da Instituição em função da qualidade do ensino, independente de valores, o que é importante em um contexto de curso com valores altos no mercado, como a Arquitetura e Urbanismo. Os ingressantes estão escolhendo a Instituição por indicação de amigos. É importante destacar que, a maior parte dos alunos ficou sabendo do vestibular do Anchieta via site institucional, o que valoriza nossa comunicação, que atinge a maioria dos ingressantes, uma vez que grande parte deles tem como seu meio de comunicação mais expressivo a internet, acessada frequentemente, conforme declarado pela maioria. Além disso, grande parte ficou sabendo por indicação de amigos, o que demonstra a valorização da IES. Os ingressantes apontam em sua maioria que os docentes apresentaram o plano de ensino adequadamente e que estes continham os itens obrigatórios, além de declarar que os professores demonstram domínio sobre o conteúdo das disciplinas e, que citam artigos científicos e textos especializados com frequência. Além disso, eles afirmam que o professor em geral indica material próprio, o que reforça a ideia de compartilhamento de materiais de aula e materiais de produção autoral dos docentes. Um ponto importante a se destacar é que, a grande maioria dos discentes responderam que as salas de aula são adequadas à quantidade de estudantes e contam com os recursos tecnológicos amplos e adequados. Acerca do oferecimento de atividades complementares, programas de iniciação científica, monitoria, programas de extensão e participação em eventos, a grande maioria afirmou conhecer os programas, com melhora em relação ao semestre anterior, em função da ampla divulgação para os ingressantes pela gestão do curso. Os alunos avaliaram ainda, que o nível de exigência do curso corresponde a carga horária de aulas e conteúdo, sendo exigido na medida. Poucos alunos comentam que o curso pode exigir mais. Sobre os meios de custeio do curso, a maioria dos alunos apontaram o próprio salário como principal forma para pagamento das despesas e afirmaram que o curso apoia financeiramente a participação de estudantes em eventos. Vale ressaltar que grande parte dos alunos contam com o salário dos pais para o pagamento do curso.</p>
            </section>
            
            <section class="secao-relatorio">
                <h2>1.3. Conclusões do perfil do ingressante</h2>
                <p>Em geral, o perfil é de um aluno interessado e envolvido com o curso escolhido, atento às atividades oferecidas pela instituição, conectado e que valoriza a qualidade que o curso oferece. Vale ressaltar que os alunos estão usando muito o seu tempo livre com redes sociais e bate-papos, podendo focar melhor em atividades voltadas para o curso. A coordenação ressalta que um grupo de whatsapp foi criado em 2021-1, para disseminação de informações entre esta e todos os alunos do curso, a fim de ampliar a comunicação, para que os eventos, atividades e comunicações em geral, cheguem de forma mais clara e direta, ampliando a proximidade entre discentes e coordenadora. O grupo já surte bastante efeito sobre o nível de informação dos alunos sobre o curso, inclusive ingressantes. Além disso, o curso conta com um programa próprio de apadrinhamento de alunos novos por veteranos, que ajuda na disseminação de informações entre eles.</p>
            </section>

            <section class="secao-relatorio">
                <h2>2. Avaliação institucional</h2>
                <p>Este relatório apresenta os aspectos mais relevantes dos resultados da avaliação institucional desenvolvida e aplicada pela CPA.</p>
                <p>O mesmo foi respondido eletronicamente por meio do “aluno online” no sistema Lyceum, no período de 02/05 a 16/05.</p>
                <p>São descritas considerações específicas ao curso de forma sucinta e objetiva e assim, não apresenta descrições comuns a outros cursos, como o método de aplicação dos questionários e cômputo dos dados.</p>
                <p>A coordenação do curso de Arquitetura e Urbanismo é quem analisa e sintetiza as informações da avaliação institucional, que posteriormente é informada ao NDE e ao colegiado do curso.</p>
                <p>Neste semestre o curso conta com **${alunosTotal} alunos** e, destes, **${alunosResponderam} responderam ao questionário**, totalizando **${alunosParticipacao}% de participação** na pesquisa.</p>
                <p>Entre os docentes, 100% desses responderam o questionário.</p>

                </section>
            
            <section class="secao-relatorio">
                <h2>3. POTENCIALIDADES E FRAGILIDADES</h2>
                </section>

            <section class="secao-relatorio">
                <h2>CONSIDERAÇÕES FINAIS</h2>
                </section>

            <div class="assinatura-final">
                <p>**${dataFinal}.**</p>
                <br><br><br>
                <p>---------------------------------------------------------------</p>
                <p>**${coordenadora}**</p>
                <p>Coordenadora do curso de **${cursoNome}**</p>
            </div>
        `;

        // ... O restante do JS (injeção e botão de imprimir) permanece o mesmo
        relatorioPronto.innerHTML = relatorioHTML;
        imprimirBtn.style.display = 'block';
    });

    // Adiciona a funcionalidade de imprimir
    imprimirBtn.addEventListener('click', function() {
        window.print();
    });
});
