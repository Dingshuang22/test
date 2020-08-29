import { axios } from '@/export/index.js'

export const getUserButton = async (userId, menuId) => {
  var buttonList = []
  return await axios.get('userButton' + 'user/permission', {
    params: {
      userId: userId,
      menuId: menuId
    }
  })
    .then(res => {
      var data = res.data
      var buttonData = data.data || []
      var len = buttonData.length
      for (var i = 0; i < len; i++) {
        var item = buttonData[i]
        buttonList.push(item.buttonCode)
      }
      return buttonList
    })
    .catch(error => {
      alert(error)
    })
}
