<template>
    <div>
        Emery - 1
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'Emery - 1',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
})
</script>
