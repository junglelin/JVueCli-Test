<template>
    <div>
        Emery - 2
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'Emery - 2',
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
