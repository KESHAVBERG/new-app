This website uses React, Material UI, Framer Motion, and the Gnews.io API. 
</br> 
The cache expires every 15 minutes to reduce load times and address the issue of the 100 requests/day limit. Caching is used to prevent excessive API calls triggered by useEffect on each render. Local storage is used to persist the selected language and the last search.
</br>

**Hooks Used:** 
1. **useState**: Tracks state in a functional component.
2. **useEffect**: Allows to perform side effects on the components.
3. **useRef**: Ensures a value persists between renders.
4. **useCallback**: Optimizes state rendering and prevents infinite "useEffect" calls.
</br>

**Functionality**
1. **Select Techinding topics from the home page**
   ![image](https://github.com/user-attachments/assets/32c3a388-0789-492e-9ef0-4469c7d1eb5e)
2. **Select your preferred Language**
   ![image](https://github.com/user-attachments/assets/e138d3a7-c07b-4527-bb29-867f3734c39f)
3. **Search the Topic you're interested In**
   ![image](https://github.com/user-attachments/assets/e7f16d1d-1b06-45b5-8aa2-8cae818dfabf)
4. **Get a Better View of the article**
   ![image](https://github.com/user-attachments/assets/014e4ba7-08d0-4755-86a1-14ce8b45503a)




