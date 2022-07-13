

import { FlatList } from 'native-base'
import Card from './Card'

const List = (data) => {
    const datos = data.data

    const renderItem = ({ item }) => {

        return (
            < Card item={item} />
        )
    }

    return (
        <>
            <FlatList
                data={datos}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                style={{ marginBottom: 250 }}
            />
        </>
    )
}

export default List