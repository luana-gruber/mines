import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // 15% para representar o cabeçalho e o resto o jogo
    difficultLevel: 0.1, // 10% com minas
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio) // Verifica quanto sobre na tela - o espaço do cabeçalho
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params