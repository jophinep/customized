" Used for highlighting chars more that 80 in a line
highlight OverLength ctermbg=green ctermfg=black guibg=#592929
au FileType python,ruby match OverLength /\%81v.\+/

" Vertical and horizontal lines in vim (used for checking alignmmnt)
set cursorline cursorcolumn

" Used for highlighting empty whitespaces
2match ErrorMsg '\s\+$'

" Covert all tabs to spaces (tab = 4 spaces)
set tabstop=4 shiftwidth=2 expandtab

" Pathogen
" Used for davidhalter/jedi-vim plugin
execute pathogen#infect()
call pathogen#helptags() " generate helptags for everything in 'runtimepath'
syntax on
filetype plugin indent on
