ionic build android --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore private_data/meetadev.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk meetadev
rm platforms/android/build/outputs/apk/meetadev.apk
/opt/android-sdk/build-tools/22.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/meetadev.apk

