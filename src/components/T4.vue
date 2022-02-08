<template>
    <div>
        t4
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'T4',
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
