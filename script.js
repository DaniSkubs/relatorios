document.addEventListener('DOMContentLoaded', () => {
    const gerarBtn = document.getElementById('gerarRelatorioBtn');
    const imprimirBtn = document.getElementById('imprimirRelatorioBtn');
    const relatorioPronto = document.getElementById('relatorio-pronto');

    // Função principal para gerar o relatório
    gerarBtn.addEventListener('click', function() {
        // 1. Captura os valores dos campos
        const instituicao = document.getElementById('instituicao').value;
        const periodo = document.getElementById('periodo').value;
        
        // Converte quebras de linha em listas (<ul><li>)
        const metodologia = document.getElementById('metodologia').value.replace(/\n/g, '<br>');
        const pontosFortes = arrayToListHTML(document.getElementById('pontos-fortes').value);
        const pontosFracos = arrayToListHTML(document.getElementById('pontos-fracos').value);
        const sugestoes = arrayToListHTML(document.getElementById('sugestoes').value);

        // 2. Monta o HTML formatado do relatório
        const relatorioHTML = `
            <div class="cabecalho-relatorio">
                <h1>RELATÓRIO DE AVALIAÇÃO INSTITUCIONAL</h1>
                <p><strong>Instituição:</strong> ${instituicao}</p>
                <p><strong>Período Avaliado:</strong> ${periodo}</p>
                <hr>
            </div>

            <section class="secao-relatorio">
                <h2>1. Metodologia e Procedimentos</h2>
                <p>${metodologia}</p>
            </section>

            <section class="secao-relatorio">
                <h2>2. Pontos Fortes</h2>
                ${pontosFortes}
            </section>

            <section class="secao-relatorio">
                <h2>3. Pontos Fracos/Desafios</h2>
                ${pontosFracos}
            </section>
            
            <section class="secao-relatorio">
                <h2>4. Recomendações e Plano de Melhoria</h2>
                ${sugestoes}
            </section>

            <div class="assinatura">
                <br><br><br>
                <p>_____________________________________</p>
                <p>Nome do Responsável pela Avaliação</p>
                <p>Setor de Avaliação Institucional</p>
            </div>
        `;

        // 3. Injeta o HTML formatado na área de visualização
        relatorioPronto.innerHTML = relatorioHTML;
        
        // 4. Mostra o botão de imprimir
        imprimirBtn.style.display = 'block';
    });

    // Adiciona a funcionalidade de imprimir
    imprimirBtn.addEventListener('click', function() {
        window.print();
    });

    // Função auxiliar para converter texto com quebras de linha em uma lista HTML
    function arrayToListHTML(text) {
        if (!text) return '<ul><li>Nenhum item registrado.</li></ul>';
        const items = text.split('\n').filter(item => item.trim() !== '');
        return '<ul>' + items.map(item => `<li>${item.trim()}</li>`).join('') + '</ul>';
    }
});
