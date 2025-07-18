const LegacyVideoPlayer = () => {
    return (
        <video 
            src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4?tr=w-800,l-subtitles,i-yt/english.srt,l-end" 
            width={"800"}
            height={"500"}
            controls
            // autoPlay
            muted
            // loop
            poster='https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg?tr=so-5'
        >
            {/* <track 
            kind='subtitles'
            src='/subtitles/english.vtt'
            srcLang='en'
            label='English'
            default
            />
            <track 
            kind='subtitles'
            src='/subtitles/hindi.vtt'
            srcLang='hi'
            label='Hindi'
            /> */}
      </video>
    )
}