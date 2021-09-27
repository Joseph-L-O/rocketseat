import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./productItem"

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
            </div>
        )
    }
    return (
        <div>
            <h2>{totalPrice}</h2>
            <div>
                <List
                    height={300}
                    rowHeight={30}
                    width={900}
                    overscanRowCount={5}
                    rowCount={results.length}
                    rowRenderer={rowRenderer}
                />
            </div>
            {/* {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
                )
            })} */}
        </div>
    )
}

/**
 * 1. criar uma nova versão do componente
 * 2. comparar com a versão anterior
 * 3. se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. pure functional components
 * 2. renders too often
 * 3. re-renders with same props
 * 4. medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1. cálculos pesados
 * 2. igualdade referencial ( quando a gente repassa aquela informação a um componente filho)
 *
 * 3.
 */