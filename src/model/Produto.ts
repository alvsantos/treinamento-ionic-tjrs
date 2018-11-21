import { Compra } from "./Compra";
import { Venda } from "./Venda";
import { Categoria } from "./Categoria";

export class Produto {
    id: string;
    titulo: string;
    categoria: Categoria;
    descricao: string;
    valorUnitario: number;
    estoqueInicial: number;
    thumbnail: string;
    foto: string;
    compras: Compra[];
    vendas: Venda[];

    static createTableSql() : string {
        return 'CREATE TABLE IF NOT EXISTS ' + 
                'Produto(id TEXT PRIMARY KEY,' + 
                ' titulo TEXT,' + 
                ' idCategoria TEXT,' + 
                ' tituloCategoria TEXT,' + 
                ' descricao TEXT,' + 
                ' valorUnitario REAL,' + 
                ' estoqueInicial REAL,' + 
                ' thumbnail TEXT,' + 
                ' foto TEXT' +
                ');';
    }

    static entityName() {
        return 'Produto';
    }

}
