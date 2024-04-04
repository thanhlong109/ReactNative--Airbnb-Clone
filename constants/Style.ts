import { StyleSheet } from 'react-native'
import Colors from './Colors'

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF'
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b'
  },
  btnIcon: {
    position: 'absolute',
    left: 16
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30
  },
  seperatorText: {
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  seperatorLine: {
    flex: 1,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  btnOutline: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb'
  }
})
